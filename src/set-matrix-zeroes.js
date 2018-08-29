/**
 * https://leetcode.com/problems/set-matrix-zeroes/description/

* algorithms
* Medium (37.06%)
* Total Accepted:    154K
* Total Submissions: 412.7K
* Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:


Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]


Example 2:


Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]


Follow up:


        A straight forward solution using O(mn) space is probably a bad idea.
        A simple improvement uses O(m + n) space, but still not the best solution.
        Could you devise a constant space solution?
 */

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var height,
      width,
      i,
      j,
      cell,
      row,
      rowIndex,
      columnIndex,
      firstRow,
      zeroesInFirstRow = false,
      zeroesInFirstColumn = false;

  height = matrix.length;

  if (height < 1) {
    return;
  }

  width = matrix[height - 1].length;

  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      cell = matrix[i][j];
      if (!cell) {
        if (i === 0) {
          zeroesInFirstRow = true;
        }
        if (j === 0) {
          zeroesInFirstColumn = true;
        }

        if (i !== 0 && j !== 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  }

  for (i = height - 1; i > 0 ; i--) {
    row = matrix[i];
    cell = row[0];
    if (!cell) {
      for (columnIndex = 0; columnIndex < width; columnIndex += 1) {
        row[columnIndex] = 0;
      }
    }
  }

  for (j = width - 1; j > 0; j--) {
    cell = matrix[0][j]
    if (!cell) {
      for (rowIndex = 1; rowIndex < height; rowIndex += 1) {
        matrix[rowIndex][j];
      }
    }
  }

  if (zeroesInFirstRow) {
    firstRow = matrix[0];
    for (columnIndex = 0; columnIndex < width; columnIndex += 1) {
      firstRow[columnIndex] = 0;
    }
  }

  if (zeroesInFirstColumn) {
    for (rowIndex = 0; rowIndex < width; rowIndex += 1) {
      matrix[0][rowIndex];
    }
  }
};

module.exports = setZeroes;
