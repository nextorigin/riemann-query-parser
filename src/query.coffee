escapeRegExp = require "lodash.escaperegexp"
antlr_parser = require "./index"


first      = (arr) -> arr[0]
second     = (arr) -> arr[1]
count      = (arr) -> arr.length
sequential = (arr) -> Array.isArray arr
remove     = (pred, arr) -> (item for item in arr when typeof item isnt pred)
re_pattern = (str) -> (new RegExp str, "g").toString()
list       = (items...) -> items
cons       = (x, arr) -> new Array x, arr...

keywords  = [
  "state"
  "host"
  "service"
  "description"
  "metric_f"
  "metric"
  "time"
  "ttl"
  "meta"
]
keyword = (word) -> word in keywords


class RiemannQuery
###
  "The query parser. Parses strings into ASTs, and converts ASTs to functions
  which match events."
###

ast_predicate = (terms...) ->
  # "Rewrites predicates with and/or/not to normal Clojure forms."
  switch
    # Basic predicate
    when (count terms) is 1
      (antlr_ast (first terms))

    # Negation
    when (first terms) is "not" and (count terms) is 2
      (list "!", (antlr_ast (second terms)))

    # And/or
    when (second terms) is "or" and (count terms) is 3
      [t1, _, t2] = terms
      (list "||", (antlr_ast t1), (antlr_ast t2))

    when (second terms) is "and" and (count terms) is 3
      [t1, _, t2] = terms
      (list "&&", (antlr_ast t1), (antlr_ast t2))

    # The grammar should never generate these trees, but for completeness...
    else
      throw new Error "Unexpected predicate structure: #{terms}"

ast_prefix = (sym, terms) ->
  ###
  "Rewrites binary expressions from infix to prefix. Takes a symbol `(e.g. '=)`
  and a 3-element seq like `(1 \"=\" 2)` and emits `(= 1 2)`, ignoring the
  middle term and transforming t1 and t2."
  ###
  [t1, _, t2] = terms
  (list sym, (antlr_ast t1), (antlr_ast t2))

ast_regex = (type, terms) ->
  ###
  "Takes a type of match (:like or :regex), a list of three string terms: an
  AST resolving to a string, the literal =~ (ignored), and a pattern. Returns
  `(:regex pattern string-ast)`.

  For :regex matches, emits a regular expression pattern.
  For :like matches, emits a string pattern."
  ###
  [string, _, pattern] = terms
  [
    type
    (do -> switch type
      when "regex" then re_pattern (antlr_ast pattern)
      when "like"  then (antlr_ast pattern))
    (antlr_ast string)
  ]

antlr_ast = (tree) ->
  ###
  "Converts a parse tree to an intermediate AST which is a little easier to
  analyze and work with. This is the AST we use for optimization and which is
  passed to various query compilers. Turns literals into their equivalent JVM
  types, and eliminates some unnecessary parser structure."
  ###
  [node_type, terms] = tree
  # (prn :antlr_ast node_type terms)
  switch node_type
    # Unwrapping transformations: dropping unnecessary parse tree wrapper nodes
    when "primary"        then (antlr_ast (first (remove "string", terms)))
    when "simple"         then (antlr_ast (first terms))
    when "value"          then (antlr_ast (first terms))
    when "number"         then (antlr_ast (first terms))

    # Predicate transforms emit and/or/not prefixes: (not (and (= a b)))
    when "predicate"      then (ast_predicate terms)

    # Rewrite relations like '(:equal a "=" b) as prefix exprs '(= a b)
    when "equal"          then (ast_prefix '==',    terms)
    when "not_equal"      then (ast_prefix '!=',    terms)
    when "lesser"         then (ast_prefix '<',     terms)
    when "greater"        then (ast_prefix '>',     terms)
    when "lesser_equal"   then (ast_prefix '<=',    terms)
    when "greater_equal"  then (ast_prefix '>=',    terms)

    # String first, then pattern.
    when "regex_match"    then (ast_regex "regex",  terms)
    when "like"           then (ast_regex "like",   terms)

    # Drop redundant terms from prefix expressions
    when "tagged"         then (list :tagged (antlr_ast (second terms)))

    # Value transformations: coercing strings to JVM types.
    when "long"           then (parseInt (first terms))
    when "float"          then (parseFloat (first terms))
    when "bign"           then (parseInt (first terms))
    when "string"         then (String (first terms))
    when "field"          then (String (first terms))
    when "true"           then true
    when "false"          then false
    when "nil"            then null

    # And by default, recurse into sub-expressions.
    else
      (cons node_type, terms.map (term) ->
        (if (sequential term)
          (antlr_ast term)
        else
          term))

ast = (str) ->
  # "Takes a string to a general AST."
  antlr_ast antlr_parser str


## This code transforms the general AST into Clojure code.
clj_ast_guarded_prefix = (f, check, a_b) ->
  # "Like prefix, but inserts a predicate check around both terms."
  [a, b] = a_b
  ###
  (list ''let [''a (clj_ast a)
              ''b (clj_ast b)]
        (list ''and
              (list check ''a)
              (list check ''b)
              (list f ''a ''b))))
  ###
  (list f, a, b)

clj_ast_field = (field) ->
  ###
  "Takes a keyword field name and emits an expression to extract that field
  from an 'event map, e.g. `(:fieldname event)`."
  ###
  "event[#{field}]"

clj_ast_tagged = (tag) ->
  # "Takes a tag and emits an expression to match that tag in an event."
  "(event.tags.indexOf(#{tag}) !== -1)"

make_regex = (str) ->
  # "Convert a string like \"foo%\" into /^foo.*$/"
  tokens = /%|[^%]+/.match str
  pairs  = tokens.map (token) ->
    (switch token
       when "%" then ".*"
       else escapeRegExp token)
  (re_pattern ("^" + (pairs.join "") + "$"))

clj_ast_regex_match = (pattern_transformer, pattern_field) ->
  ###
  "Takes a pattern transformer, and a list of [pattern string-ast], and emits
  code to match the string-ast's results with a regex match, compiling pattern
  with pattern-transformer."
  ###
  [pattern, field] = pattern_field
  str              = (clj_ast field)
  regexp           = (pattern_transformer pattern)
  "#{regexp}.exec(#{str})"

clj_ast = (ast) ->
  # "Rewrites an AST to eval-able Clojure forms."
  switch
    # Rewrite fields to field extracting expressions
    when (keyword ast)
      (clj_ast_field ast)

    # Anything other than a list passes through unchanged
    when not (sequential ast)
      ast

    # Lists, on the other hand
    else
      [node_type, terms] = ast
      ## Transform to JS
      return (infix nodetype, terms) unless (sequential terms)
      ##
      switch node_type
        when "=="         then (list '==', (terms.map clj_ast))
        when "<"          then (clj_ast_guarded_prefix "<", "number", terms)
        when ">"          then (clj_ast_guarded_prefix ">", "number", terms)
        when "<="         then (clj_ast_guarded_prefix "<=", "number", terms)
        when ">="         then (clj_ast_guarded_prefix ">=", "number", terms)
        when "like"       then (clj_ast_regex_match make_regex, terms)
        when "regex"      then (clj_ast_regex_match identity,   terms)
        when "tagged"     then (clj_ast_tagged (first terms))
        else
          (cons node_type (mapv clj_ast terms))

infix = (operation, terms) ->
  [before, after] = terms
  "(#{before} #{operation} #{after})"


cache = {}
keys  = []
###
"Speeds up the compilation of queries by caching map of ASTs to corresponding
functions."
###
cache_add = (key, item) ->
  keys.push key
  cache[key] = item
  if keys.length > 64
    old = keys.shift()
    delete cache[old]

cache_lookup = (key) ->
  cache[key]

fun = (ast) ->
  ###
  "Transforms an AST into a fn [event] which returns true if the query matches
  that event. Example:

  (def q (fun (ast \"metric > 2\")))
  (q {:metric 1}) => false
  (q {:metric 3}) => true"
  ###
  if fn = cache_lookup ast
    # Cache hit
    fn

  else
    # Cache miss
    fn = eval "function(event) {" + (clj_ast ast) + "}"
    cache_add ast, fn
    fn


RiemannQuery.ast       = ast
RiemannQuery.antlr_ast = antlr_ast
RiemannQuery.fun       = fun

module.exports         = RiemannQuery
