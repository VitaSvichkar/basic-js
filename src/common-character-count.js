const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS1 = new Set(s1);
  const arrS2 = new Set(s2);
  let count = 0;
  arrS1.forEach((el) => {
    if (arrS2.has(el)) {
      count += 1;
    }
  })
  return count;
}
getCommonCharacterCount('aabcc', 'adcaa');
module.exports = {
  getCommonCharacterCount
};
