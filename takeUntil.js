const emo1 = String.fromCodePoint(0x1F6D1);
const emo2 = String.fromCodePoint(0x2705);
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
const assertArraysEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`${emo2}${emo2}${emo2} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${emo1}${emo1}${emo1} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const element of array) {
    if (callback(element) === true) {
      break;
    }
    newArray.push(element);
  }
  return newArray;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2])
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);