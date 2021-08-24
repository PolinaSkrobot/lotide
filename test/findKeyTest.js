const _ = require('../index');
const assert = require('chai').assert;

describe("returns first key with given number of stars", () => {
  it("returns 'noma' for stars=2", () => {
    assert.deepEqual(_.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
  
});