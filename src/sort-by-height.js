const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [...arr];
  const indArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      sortArr.splice(sortArr.indexOf(-1), 1);
      indArr.push(i);
      console.log(sortArr);
    }
  }
  console.log(sortArr, indArr);
  sortArr.sort((a, b) => a - b);
  indArr.forEach((el) => sortArr.splice(el, 0, -1));

  return sortArr;
}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
module.exports = {
  sortByHeight,
};
