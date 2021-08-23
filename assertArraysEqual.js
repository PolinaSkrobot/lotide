const emo1 = String.fromCodePoint(0x1F6D1);
const emo2 = String.fromCodePoint(0x2705);
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
const assertArraysEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);