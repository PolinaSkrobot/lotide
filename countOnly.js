const assertEqual = function(actual, expected) {
  const emo1 = String.fromCodePoint(0x1F6D1);
  const emo2 = String.fromCodePoint(0x2705);
  if (actual === expected) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${actual} !== ${expected}`);
  }
    
};
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);