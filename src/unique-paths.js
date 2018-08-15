/**
 * https://leetcode.com/problems/unique-paths/description/

* algorithms
* Medium (43.59%)
* Total Accepted:    210.1K
* Total Submissions: 478.1K
* Testcase Example:  '3\n2'

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:


Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right


Example 2:


Input: m = 7, n = 3
Output: 28
*/

// var helper = function(m, n) {
//   var paths = 0;

//   if (m > 1 && n > 1) {
//     paths += helper(m - 1, n);
//     paths += helper(m, n - 1);
//     paths += 1;
//   }

//   return paths;
// }

// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(m, n) {
//   return helper(m, n) + 1;
// };

/**

DP Solution for 3 x 3

For paths(i, j) it uses paths(i - 1, j) + paths(i, j - 1)

1 1 1
1 2 3
1 3 6

Note however, that one can just use a single array.
This is done by replacing the existing value at an index with the sum of existing value + value at previous index.
So in the 3rd row of the DP solution the previous row would look like

[1, 2, 3]

So when calculating the next row (in-place), you'd start with 2 (index 1)

[1, 3 (2 + 1), 3]

Then for index 2

[1, 3, 6 (3 + 3)]

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var currentRow = new Array(n);
  for (var i = 0; i < n; i += 1) {
    currentRow[i] = 1;
  }

  for (var row = 1; row < m; row += 1) {
    for (var column = 1; column < n; column += 1) {
      currentRow[column] += currentRow[column - 1];
    }
  }

  return currentRow[n - 1];
};

module.exports = uniquePaths;
