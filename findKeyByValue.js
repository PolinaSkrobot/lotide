const findKeyByValue = function(obj, name) {
  let x = undefined;
  for (const key in obj) {
    if (obj[key] === name) {
      x = key;
    }
  }
  return x;
  
};

module.exports = findKeyByValue;

