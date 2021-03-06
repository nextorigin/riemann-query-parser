{expect}   = require "chai"


RiemannQuery = require "../src/riemann-query"
{ast, clj_ast, js_ast, fun} = RiemannQuery

# (deftest clj-ast-test
#   (are [s expr] (= (clj-ast (ast s)) expr)

describe "js-ast-test", ->
  it "should compile each query to the equivalent JavaScript", ->

    expressions =
      # Fields
      "state = true":        '( event["state"] == true )'
      "host = true":         '( event["host"] == true )'
      "service = true":      '( event["service"] == true )'
      "description = true":  '( event["description"] == true )'
      "metric_f = true":     '( event["metric_f"] == true )'
      "metric = true":       '( event["metric"] == true )'
      "time = true":         '( event["time"] == true )'
      "ttl = 64":            '( event["ttl"] == 64 )'

      # Literals
      "true":  true
      "false": false
      "nil":   null
      "null":  null

      # Integers
      "state = 0":  '( event["state"] == 0 )'
      "state = 1":  '( event["state"] == 1 )'
      "state = -1": '( event["state"] == -1 )'

      # # Floats
      "state = 0.0":     '( event["state"] == 0 )'
      "state = 1.5":     '( event["state"] == 1.5 )'
      "state = -1.5":    '( event["state"] == -1.5 )'
      "state = 1e5":     '( event["state"] == 100000 )'
      "state = 1E5":     '( event["state"] == 100000 )'
      "state = -1.2e-5": '( event["state"] == -0.000012 )'

      # Strings
      "state = \"\"":                '( event["state"] == "" )'
      "state = \"foo\"":             '( event["state"] == "foo" )'
      "state = \"\\b\\t\\n\\f\\r\"": '( event["state"] == "\\b\\t\\n\\f\\r" )'
      "state = \" \\\" \\\\ \"":     '( event["state"] == " \\" \\\\ " )'
      "state = \"辻斬\"":             '( event["state"] == "辻斬" )'

      # Simple predicates
      "state = 2":                   '( event["state"] == 2 )'
      "state > 2":                   '( event["state"] > 2 )'
      "state < 2":                   '( event["state"] < 2 )'
      "state >= 2":                  '( event["state"] >= 2 )'
      "state <= 2":                  '( event["state"] <= 2 )'
      "state != 2":                  '( event["state"] != 2 )'

      # Regexen aren't comparable
      "state =~ \"%foo%\"":          '!!/^.*foo.*$/g.exec(event["state"])'

      # Tags
      "tagged \"cat\"":              '(event.tags.indexOf("cat") !== -1)'

      # Boolean operators
      "not host = 1":                '(  ! ( event["host"] == 1 ) )'
      "host = 1 and state = 2":      '( ( event["host"] == 1 ) && ( event["state"] == 2 ) )'
      "host = 1 or state = 2":       '( ( event["host"] == 1 ) || ( event["state"] == 2 ) )'

      # Grouping
      "(host = 1)":                  '( event["host"] == 1 )'
      "((host = 1))":                '( event["host"] == 1 )'

      # Precedence
      "not host = 1 and host = 2":   '( (  ! ( event["host"] == 1 ) ) && ( event["host"] == 2 ) )'

      "not host = 1 or host = 2 and host = 3": '( (  ! ( event["host"] == 1 ) ) || ( ( event["host"] == 2 ) && ( event["host"] == 3 ) ) )'

      "not ((host = 1 or host = 2) and host = 3)": '(  ! ( ( ( event["host"] == 1 ) || ( event["host"] == 2 ) ) && ( event["host"] == 3 ) ) )'

    for expression, expected of expressions
      compiled = (js_ast clj_ast ast expression)
      expect(compiled).to.equal expected

describe "RiemannQuery#fun", ->
  fn         = null
  expression = "host ~= \"^local[a-z]+\" and state = 1e4"

  beforeEach ->
    fn = fun ast expression

  afterEach ->
    fn = null

  it "should return a function", ->
    expect(fn).to.be.a "function"

  it "should return true when an object matches the expression", ->
    event =
      host: "localhost"
      state: 10000

    match = fn event
    expect(match).to.be.true

  it "should return false when an object doesn not match the expression", ->
    event =
      host: "localhost"
      state: 9999

    match = fn event
    expect(match).to.be.false
