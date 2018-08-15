/**
 * [48] Rotate Image

https://leetcode.com/problems/rotate-image/description/

* algorithms
* Medium (42.52%)
* Total Accepted:    179.6K
* Total Submissions: 413.7K
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:


Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]


Example 2:


Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */


var swap = function(matrix, from, to ) {
  var fromValue = matrix[from.x][from.y];
  var toValue = matrix[to.x][to.y];
  matrix[from.x][from.y] = toValue;
  matrix[to.x][to.y] = fromValue;
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var iterations = Math.floor(matrix.length / 2);

  for (var x = 0; x < matrix.length; x += 1) {
    for (var y = x; y < matrix.length; y += 1) {
      var from = { x: x, y: y };
      var to = { x: y, y: x };
      swap(matrix, from, to);
    }
  }

  for (var x = 0; x < matrix.length; x += 1) {
    for (var y = 0; y < iterations; y += 1) {
      var from = { x: x, y: y };
      var to = { x: x, y: matrix.length - 1 - y };
      swap(matrix, from, to);
    }
  }
};

module.exports = rotate;
