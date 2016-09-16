util   = require "util"
stream = require "readable-stream"
parser = require "./riemann-query"
extend = util._extend


class QueryStream extends stream.Transform
  constructor: (options) ->
    @filter = parser query
    super extend options, objectMode: true

  _transform: (data, encoding, done) ->
    @push data if @filter data
    done()


module.exports = QueryStream
