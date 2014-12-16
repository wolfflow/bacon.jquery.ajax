expect = require("chai").expect

bjq = require "../src/bacon.jquery.ajax"

Bacon = require "baconjs"

describe "Node.js specific", ->
  it "exports original Bacon.$", ->
    expect(bjq).to.equal(Bacon.$)
