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
  const sortNumbers = arr.filter((item) => item !== -1)
    .sort((a, b) => a - b);
  const sortArr = [];
  let indexForSortNumbers = 0;
  arr.forEach((item) => {
    if (item === -1) sortArr.push(item);
    else {
      sortArr.push(sortNumbers[indexForSortNumbers]);
      indexForSortNumbers++;
    }
  });
  return sortArr;
}

module.exports = sortByHeight;
