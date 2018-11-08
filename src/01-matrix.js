/**
 * https://leetcode.com/problems/01-matrix
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
Example 1:
Input:

0 0 0
0 1 0
0 0 0
Output:
0 0 0
0 1 0
0 0 0
Example 2:
Input:

0 0 0
0 1 0
1 1 1
Output:
0 0 0
0 1 0
1 2 1
Note:
The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

/**
 * Strategy is to use BFS
 * First, identify all cells that are 0 - these will serve as our starting point for our search
 * For all cells surrounding 0s, their values will be 1
 * For all cells surrounded by 1s, their values will be 2
 * So basically, for all non-visited surrounding cells, add 1 to the current cell's value and set that as the surrounding cell value
 * Then enqueue the surrounding cell
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
   var length = matrix.length,
       width = matrix[0].length,
       i,
       j,
       row,
       visited = [],
       queue = [],
       currentCell,
       adjacentCellsDifferences,
       adjacentCellDifference,
       adjacentX,
       adjacentY;

    for (i = 0; i < length; i += 1) {
      row = matrix[i];
      visited[i] = [];

      for (j = 0; j < row.length; j += 1) {
        if (row[j] === 0) {
          queue.unshift({ x: i, y: j });
          visited[i][j] = true;
        }
      }
    }

    adjacentCellsDifferences = [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
    ];

    while (queue.length > 0) {
      currentCell = queue.pop();

      for (i = 0; i < adjacentCellsDifferences.length; i += 1) {
        adjacentCellDifference = adjacentCellsDifferences[i];
        adjacentX = currentCell.x + adjacentCellDifference.x;
        adjacentY = currentCell.y + adjacentCellDifference.y;

        if (adjacentX >= 0 && adjacentY >= 0 && adjacentX < length && adjacentY < width && !visited[adjacentX][adjacentY]) {
          matrix[adjacentX][adjacentY] = matrix[currentCell.x][currentCell.y] + 1;
          visited[adjacentX][adjacentY] = true;
          queue.unshift({ x: adjacentX, y: adjacentY });
        }
      }
    }

    return matrix;
};

module.exports = updateMatrix;
