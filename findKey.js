

const findKey = function(obj, cb) {
  let x = undefined;
  for (const key in obj) {
    if (cb(obj[key]) === true) {
      x = key;
      break;
    }
  }
  return x;
};

module.exports = findKey;
