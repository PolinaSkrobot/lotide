
const middle = require("../middle");
const assert = require('chai').assert;

describe("returns middle of array", () => {
  it("returns [5] for [7, 5, 5]", () => {
    assert.deepEqual(middle([7, 5, 5]), [5]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [7] for [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13]), [7]);
  });
  it("returns [] for [1,5]", () => {
    assert.deepEqual(middle([1, 5]), []);
  });
});

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8]), [4,5]);
// assertArraysEqual(middle([1, 5]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13]), [7]);