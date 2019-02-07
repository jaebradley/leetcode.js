/**
 * https://leetcode.com/problems/shortest-bridge/

In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)



Example 1:

Input: [[0,1],[1,0]]
Output: 1
Example 2:

Input: [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
Example 3:

Input: [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1


Note:

1 <= A.length = A[0].length <= 100
A[i][j] == 0 or A[i][j] == 1
*/

/**
 *
 * Strategy is to paint one island as 2s using DFS
 * Then using BFS, get all nodes that are 2s and put them in the queue
 * Each iteration of the existing set of nodes, increment the counter
 * Then go through queue adding non-diagonal neighbors
 * If neighbor is 1, report the current counter - 1
 * If neighbor has not been visited add to queue
 */

function dfs(A, i, j) {
  if (i >= 0 && i < A.length && j >= 0 && j < A[i].length && A[i][j] === 1) {
    A[i][j] = 2;

    dfs(A, i - 1, j);
    dfs(A, i + 1, j);
    dfs(A, i, j - 1);
    dfs(A, i, j + 1);
  }
}

function paint(A) {
  var i,
      j;

  for (i = 0; i < A.length; i += 1) {
    for (j = 0; j < A[i].length; j += 1) {
      if (A[i][j] === 1) {
        dfs(A, i, j);
        return;
      }
    }
  }
}

/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  var cells = [],
      cell,
      counter = 0,
      cellCount,
      i,
      j,
      visitedCells = [];

  paint(A);

  for (i = 0; i < A.length; i += 1) {
    visitedCells[i] = [];
    for (j = 0; j < A[i].length; j += 1) {
      if (A[i][j] === 2) {
        cells.push({ x: i, y:  j });
        visitedCells[i][j] = true;
      }
    }
  }

  while (cells.length > 0) {
    cellCount = cells.length;

    for (i = 0; i < cellCount; i += 1) {
      cell = cells.shift();

      if (A[cell.x][cell.y] === 1) {
        return counter - 1;
      }

      if (cell.x - 1 >= 0 && !visitedCells[cell.x - 1][cell.y]) {
        cells.push({ x: cell.x - 1, y: cell.y });
        visitedCells[cell.x - 1][cell.y] = true;
      }

      if (cell.x + 1 < A.length && !visitedCells[cell.x + 1][cell.y]) {
        cells.push({ x: cell.x + 1, y: cell.y });
        visitedCells[cell.x + 1][cell.y] = true;
      }

      if (cell.y - 1 >= 0 && !visitedCells[cell.x][cell.y - 1]) {
        cells.push({ x: cell.x, y: cell.y - 1 });
        visitedCells[cell.x][cell.y - 1] = true;
      }

      if (cell.y + 1 < A[cell.x].length && !visitedCells[cell.x][cell.y + 1]) {
        cells.push({ x: cell.x, y: cell.y + 1 });
        visitedCells[cell.x][cell.y + 1] = true;
      }
    }
    counter += 1;
  }

  return 0;
};

module.exports = shortestBridge;
