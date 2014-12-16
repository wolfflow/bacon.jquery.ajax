var expect = chai.expect

describe('bacon.jquery.ajax', function() {
  $.mockjax({
      url: "/test",
      responseTime: 0,
      responseText: "good"
    })

  describe("AJAX", function() {
    describe("Converts EventStream of requests into EventStream of responses", function() {
      expectStreamValues(Bacon.once({url:"/test"}).ajax(), ["good"])
    })
    describe("Converts Property of requests into EventStream of responses", function() {
      expectStreamValues(Bacon.once({url:"/test"}).toProperty().ajax(), ["good"])
    })
  })
})

function expectStreamValues(stream, expectedValues) {
  var values = []
  before(function(done) {
    stream.onValue(function(value) { values.push(value) })
    stream.onEnd(done)
  })
  it("is an EventStream", function() {
    expect(stream instanceof Bacon.EventStream).to.be.ok()
  })
  it("contains expected values", function() {
    expect(values).to.deep.equal(expectedValues)
  })
}