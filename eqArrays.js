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
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
    }
  }
  return equal;
};

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);