/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array(matrix.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(matrix[0].length).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        for (
          let k = i > 0 ? i - 1 : 0;
          k < (i < matrix.length - 1 ? i + 2 : matrix.length);
          k++
        ) {
          for (
            let l = j > 0 ? j - 1 : 0;
            l < (j < matrix[i].length - 1 ? j + 2 : matrix[i].length);
            l++
          ) {
            if (!(k === i && l === j)) {
              result[k][l] += 1;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = minesweeper;
