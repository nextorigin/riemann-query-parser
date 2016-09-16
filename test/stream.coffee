{expect}   = require "chai"


stream      = require "readable-stream"
QueryStream = require "../src/stream"


describe "QueryStream", ->
  it "should filter a stream based on a Riemann query", (done) ->
    expression = "ttl > 200 and host =~ \"local%\""
    filter     = new QueryStream expression
    source     = new stream.PassThrough objectMode: true
    good       = ttl: 300, host: "localhost"
    maybe      = ttl: 150, host: "localhost"
    bad        = ttl: 0, host: "remote"

    source.pipe filter

    await
      filter.once "data", defer data
      source.push good

    expect(data).to.eql good

    filter.on "data", (data) -> done new Error data
    source.push maybe
    source.push bad

    filter.removeAllListeners "data"

    await
      filter.on "data", defer data
      source.push good

    expect(data).to.eql good
    done()


