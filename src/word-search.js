/**
 * https://leetcode.com/problems/word-search/description/

* algorithms
* Medium (28.47%)
* Total Accepted:    189.1K
* Total Submissions: 664.2K
* Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:


board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */

var backtrack = function(board, word, currentPosition, visited, potential) {
  if (potential.length === word.length) {
    return true;
  }

  var nextCharacter = word[potential.length];

  for (var i = -1; i <= 1; i += 1) {
    var x = Math.min(Math.max(0, currentPosition.x + i), board.length);
    for (var j = -1; j <= 1; j += 1) {
      var y = Math.min(Math.max(0, currentPosition.y + j), board[x].length);
      if (!visited[x][y]) {
        var surroundingCharacter = board[x][y];
        if (surroundingCharacter === nextCharacter) {
          visited[x][y] = true;
          potential.push(surroundingCharacter);
          var result = backtrack(board, word, { x: x, y: y }, visited, potential);
          if (result === true) {
            return true;
          } else {
            visited[x][y] = false;
            potential.pop();
          }
        }
      }
    }
  }

  return false;
}

var exist = function(board, word) {
  var visited = [];
  for (var i = 0; i < board.length; i += 1) {
    visited[i] = [];
    for (var j = 0; j < board[i].length; j += 1) {
      visited[i][j] = false;
    }
  }

  var firstCharacter = word[0];
  for (var i = 0; i < board.length; i += 1) {
    for (var j = 0; j < board[i].length; j += 1) {
      var currentCharacter = board[i][j];
      if (currentCharacter === firstCharacter) {
        var result = backtrack(board, word, { x: i, y: j }, Array.from(visited), [currentCharacter]);
        if (result === true) {
          return true;
        }
      }
    }
  }

  return false;
};

module.exports = exist;
