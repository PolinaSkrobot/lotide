const letterPositions = function(sentence) {
  const results = {};
  const newSent = sentence;//.replace(/\s/g, '');
  for (let i = 0; i < newSent.length; i++) {
    if (newSent.charAt(i) === ' ') {
      i++;
    }
    if (results[newSent.charAt(i)]) {
      results[newSent.charAt(i)].push(i);
    } else {
      results[newSent.charAt(i)] = [i];
    }
  }
  return results;
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

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
assertArraysEqual(letterPositions('lighthouse in the house').l, [0]);
assertArraysEqual(letterPositions('lighthouse in the house').i, [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house').g, [2]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house').t, [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house').o, [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house').u, [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house').s, [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house').n, [12]);