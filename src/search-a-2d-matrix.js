/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

 */

 /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  return binarySearch(0, matrix.length * matrix[0].length - 1, target, matrix);
};

var getMatrixValueFromIndex = function(index, matrix) {
  var rowIndex,
      columnIndex;

  rowIndex = Math.floor(index / (matrix.length * matrix[0].length));
  columnIndex = index % matrix[0].length;

  return matrix[rowIndex][columnIndex];
}

var binarySearch = function(startIndex, endIndex, target, matrix) {
  var middleIndex,
      value;

  if (startIndex > endIndex) {
    return false;
  }

  middleIndex = endIndex - Math.floor((endIndex - startIndex) / 2);
  value = getMatrixValueFromIndex(middleIndex, matrix);

  if (target > value ) {
    return binarySearch(middleIndex + 1, endIndex, target, matrix);
  } else if (target < value) {
    return binarySearch(startIndex, middleIndex - 1, target, matrix);
  }
  return true;
}

module.exports = searchMatrix;
