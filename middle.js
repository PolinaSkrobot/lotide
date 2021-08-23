
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

module.exports = middle;