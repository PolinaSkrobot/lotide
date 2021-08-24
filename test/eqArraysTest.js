
const _ = require("../index");
const assert = require('chai').assert;
describe("compares two arrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.equal(_.eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
  it("returns false for [1, 2, 3], [1, 2, 2]", () => {
    assert.equal(_.eqArrays([1, 2, 3], [1, 2, 2]),false);
  });
  
});
