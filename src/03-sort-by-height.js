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
  let temp;
  let minIndex;
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== -1) {
      minIndex = i;
      for (let j = i; j < sortedArr.length; j++) {
        if (sortedArr[j] !== -1) {
          if (sortedArr[minIndex] > sortedArr[j]) minIndex = j;
        }
      }
      if (minIndex !== i) {
        temp = sortedArr[minIndex];
        sortedArr[minIndex] = sortedArr[i];
        sortedArr[i] = temp;
      }
    }
  }
  return sortedArr;
}

module.exports = sortByHeight;
