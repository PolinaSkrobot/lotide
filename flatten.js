const emo1 = String.fromCodePoint(0x1F6D1);
const emo2 = String.fromCodePoint(0x2705);

const eqArrays = function(arr1,arr2) {
  let equal = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
    }
  }
  return equal;
};

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(input) {
  let flattenArray = [];
  for (let element of input) {
    if (Array.isArray(element)) {
      for (let el of element) {
        flattenArray.push(el);
      }
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray;
};

console.log(flatten([1,2,[3,4],5]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
