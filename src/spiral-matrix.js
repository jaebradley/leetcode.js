/**
 * https://leetcode.com/problems/spiral-matrix/description/

* algorithms
* Medium (27.71%)
* Total Accepted:    158.6K
* Total Submissions: 569.3K
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:


Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]


Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */


 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var result = [];

  if (matrix.length == 0) {
    return result;
}

  var j;
  var rowBegin = 0;
  var rowEnd = matrix.length-1;
  var colBegin = 0;
  var colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
      // Traverse Right
      for (j = colBegin; j <= colEnd; j ++) {
        result.push(matrix[rowBegin][j]);
      }
      rowBegin++;

      // Traverse Down
      for (j = rowBegin; j <= rowEnd; j ++) {
        result.push(matrix[j][colEnd]);
      }
      colEnd--;

      if (rowBegin <= rowEnd) {
          // Traverse Left
          for (j = colEnd; j >= colBegin; j --) {
            result.push(matrix[rowEnd][j]);
          }
      }
      rowEnd--;

      if (colBegin <= colEnd) {
          // Traverse Up
          for (j = rowEnd; j >= rowBegin; j --) {
              result.push(matrix[j][colBegin]);
          }
      }
      colBegin ++;
  }

  return result;
};

module.exports = spiralOrder;
