const assertArraysEqual = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return;
};
const without = function(arr1, unwanted) {
  let newAr = arr1.filter(item=>!unwanted.includes(item));
  return newAr;
};
console.log(without([1, 2, 3], [3,2]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);