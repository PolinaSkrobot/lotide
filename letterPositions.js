const letterPositions = function(sentence) {
  const results = {};
  const newSent = sentence.toLowerCase();//.replace(/\s/g, '');
  for (let i = 0; i < newSent.length; i++) {
    if (newSent.charAt(i) === ' ') {
      i++;
    }
    if (results[newSent.charAt(i)]) {
      results[newSent.charAt(i)].push(i);
    } else {
      results[newSent.charAt(i)] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

