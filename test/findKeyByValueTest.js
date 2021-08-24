const _ = require('../index');
const assert = require('chai').assert;
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
describe("returns key by value", () => {
  it("returns drama for The Wire", () => {
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");
  });
  
});