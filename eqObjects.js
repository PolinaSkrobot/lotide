const assertEqual = function(actual, expected) {
  const emo1 = String.fromCodePoint(0x1F6D1);
  const emo2 = String.fromCodePoint(0x2705);
  if (actual === expected) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${actual} !== ${expected}`);
  }
    
};
const eqObjects = function(object1, object2) {
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);