const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = arr.slice();

  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i] === '--double-next') {
      if (i + 1 < newArr.length) {
        newArr.splice(i, 1, newArr[i + 1]);
      } else {
        newArr.splice(i, 1);
      }
    } else if (newArr[i] === '--double-prev') {
      if (i - 1 >= 0) {
        newArr.splice(i, 1, newArr[i - 1]);
      } else {
        newArr.splice(i, 1);
      }
    } else if (newArr[i] === '--discard-next') {
      if (i + 1 < newArr.length) {
        newArr.splice(i, 2);
      } else {
        newArr.splice(i, 1);
      }
    } else if (newArr[i] === '--discard-prev') {
      if (i - 1 >= 0) {
        newArr.splice(i - 1, 2);
      } else {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
}
transform([1, 2, 3, '--double-prev', 4, 5]);
module.exports = {
  transform,
};
