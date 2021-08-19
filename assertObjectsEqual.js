const eqArrays = function(arr1,arr2) {
  let equal = true;
  if (arr1.length !== arr2.length) {
    equal = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        equal = false;
        break;
      }
    }
  }
  return equal;
};

const eqObjects = function(object1, object2) {
  //let result = true;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      const value1 = object1[key];
      const value2 = object2[key];
      if (Array.isArray(value2) && Array.isArray(value1)) {
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2); // => false
assertObjectsEqual(ab, ba); // =>true
