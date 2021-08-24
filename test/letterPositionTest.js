const _ = require('../index');
const assert = require('chai').assert;

describe("returns position of letter", () => {
  it("returns [0] for 'lighthouse in the house'.l ", () => {
    assert.deepEqual(_.letterPositions('lighthouse in the house').l, [0]);
  });
  it("returns [1, 11] for 'lighthouse in the house'.i ", () => {
    assert.deepEqual(_.letterPositions('lighthouse in the house').i, [1, 11]);
  });
  

});