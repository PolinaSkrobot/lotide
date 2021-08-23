const emo1 = String.fromCodePoint(0x1F6D1);
const emo2 = String.fromCodePoint(0x2705);
const eqArrays = require("./eqArrays");
const assertArraysEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
module.exports = assertArraysEqual;
