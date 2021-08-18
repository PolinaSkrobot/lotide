const assertEqual = function(actual, expected) {
  const emo1 = String.fromCodePoint(0x1F6D1);
  const emo2 = String.fromCodePoint(0x2705);
  let same = true;
  if (actual.length !== expected.length) {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        same = false;
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        break;
      }
    }
    if (same) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
  }
};
const tail = function(someArray) {
  const newArr = someArray.slice(1);
  return newArr;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
