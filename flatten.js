
const flatten = function(input) {
  let flattenArray = [];
  for (let element of input) {
    if (Array.isArray(element)) {
      for (let el of element) {
        flattenArray.push(el);
      }
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray;
};

module.exports = flatten;

