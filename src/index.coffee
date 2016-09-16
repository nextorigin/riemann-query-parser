antlr         = require "antlr4"
{QueryLexer}  = require "../lib/antlr/QueryLexer"
{QueryParser} = require "../lib/antlr/QueryParser"


cons        = (x, arr) -> new Array x, arr...
bind_second = (fn, bound) -> (arg) -> fn arg, bound

parser_rule_name = (tree) ->
  {name} = tree.constructor
  (name.replace "Context", "").toLowerCase()

sexpr = (tree, parser) ->
  if tree instanceof antlr.ParserRuleContext
    node = (cons (parser_rule_name tree),
                 tree.children.map (bind_second sexpr, parser))
  else
    tree.getText()

module.exports = (str) ->
  chars  = new antlr.InputStream str
  lexer  = new QueryLexer chars
  tokens = new antlr.CommonTokenStream lexer
  parser = new QueryParser tokens
  tree   = parser.predicate()
  sexpr tree