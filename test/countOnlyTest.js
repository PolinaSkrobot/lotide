const _ = require('../index');
const assert = require('chai').assert;
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
describe("count only approved names given as second param within array of names as a first param", () => {
  it("returns 1 for Jason", () => {
    assert.strictEqual(result1["Jason"],1);
  });
  it("returns 2 for Fang", () => {
    assert.strictEqual(result1["Fang"],2);
  });
  it("returns undefined for Karima", () => {
    assert.strictEqual(result1["Karima"],undefined);
  });
  
});