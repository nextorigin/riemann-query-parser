Parser        = require "js_antlr"
{QueryLexer}  = require "../lib/antlr/QueryLexer"
{QueryParser} = require "../lib/antlr/QueryParser"


module.exports = (str) ->
  parser = new Parser QueryLexer, QueryParser
  parser.parse str
