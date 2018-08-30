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

  // Iterate through matrix and if a zero exists
  // Set the cells at the start of the row / column to 0
  // These row / column start cells will be used later to modify the matrix
  // For the first row and column, since they share a cell, I instead use two booleans
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

  // Iterate through all non-rows except the first
  // If the start of the row contains a zero, replace all values in the row with a zero
  for (i = height - 1; i > 0 ; i--) {
    row = matrix[i];
    cell = row[0];
    if (!cell) {
      for (columnIndex = 0; columnIndex < width; columnIndex += 1) {
        row[columnIndex] = 0;
      }
    }
  }

  // Iterate through all columns, except the first
  // If the start of the column contains a zero, replace all values in the column with a zero
  for (j = width - 1; j > 0; j--) {
    cell = matrix[0][j]
    if (!cell) {
      for (rowIndex = 1; rowIndex < height; rowIndex += 1) {
        matrix[rowIndex][j]  = 0;
      }
    }
  }

  // If there are zeroes in the first row, replace all values in the first row with a zero
  if (zeroesInFirstRow) {
    firstRow = matrix[0];
    for (columnIndex = 0; columnIndex < width; columnIndex += 1) {
      firstRow[columnIndex] = 0;
    }
  }

  // If there are zeroes in the first column, replace all values in the first column with a zero
  if (zeroesInFirstColumn) {
    for (rowIndex = 0; rowIndex < height; rowIndex += 1) {
      matrix[rowIndex][0] = 0;
    }
  }
};

module.exports = setZeroes;
