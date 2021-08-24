const _ = require('../index');
const assert = require('chai').assert;

describe("returns number of letter in the string", () => {
  it("returns 2 for ('LHL').L", () => {
    assert.deepEqual(_.countLetters('LHL').L, 2);
  });
  it("returns 3 for ('over the moon').o", () => {
    assert.deepEqual(_.countLetters('over the moon').o, 3);
  });
  
});