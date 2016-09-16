util   = require "util"
stream = require "readable-stream"
Query  = require "./riemann-query"
extend = util._extend
{ast, fun} = Query


class QueryStream extends stream.Transform
  constructor: (query, options = {}) ->
    @filter = fun ast query
    super extend options, objectMode: true

  _transform: (data, encoding, done) ->
    @push data if @filter data
    done()


module.exports = QueryStream
