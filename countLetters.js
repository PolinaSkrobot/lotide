const assertEqual = function(actual, expected) {
   
  if ((actual) === (expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(input) {
  let output = {};
  for (let char of input) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
};
console.log(countLetters('LHL'));
console.log(countLetters('over the moon'));
assertEqual((countLetters('LHL')).L,2);