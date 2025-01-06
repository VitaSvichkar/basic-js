const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let strg = [...str];
  let newstr = '';
  for (let i = 0; i < strg.length; i += 1) {
    if (strg[i] === strg[i + 1]) {
      count += 1;
    } else {
      count += 1;
      newstr += `${count > 1 ? count : ''}${strg[i]}`;
      count = 0;
    }
  }
  return newstr;
}

module.exports = {
  encodeLine,
};
