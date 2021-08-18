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
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
const middle = function(array) {
  let midd = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[midd - 1],array[midd]];
  } else {
    return [array[midd]];
  }

};
console.log(middle([9,8,9,0]));
console.log(middle([5,9,0]));
console.log(middle([9,0]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8]), [4,5]);
assertArraysEqual(middle([1, 5]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13]), [7]);