const _ = require('../index');
const assert = require('chai').assert;
const ab = { a: "1", b: "2" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
describe("compare two objects", () => {
  it("returns true for cd and dc", () => {
    assert.equal(_.eqObjects(cd, dc), true);
  });
  it("returns false if campare cd and cd2", ()=>{
    assert.equal(_.eqObjects(cd, cd2), false);
  });
});