const assertEqual = function(actual, expected) {
  const emo1 = String.fromCodePoint(0x1F6D1);
  const emo2 = String.fromCodePoint(0x2705);
  if (actual === expected) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${actual} !== ${expected}`);
  }
    
};
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
// const eqArrays = function(x, y) {
//   return Array.isArray(x) &&
//     Array.isArray(y) &&
//     x.length === y.length &&
//     x.every((element, index) => element === y[index]);
// };

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false