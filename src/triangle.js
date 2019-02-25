/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (!triangle || triangle.length < 1) {
    return 0;
  }

  var values = [triangle[triangle.length - 1]];

  for (var i = 1; i < triangle.length; i += 1) {
    var previousValues = values[i - 1];
    var currentRowIndex = triangle.length - i - 1;
    var currentRow = triangle[currentRowIndex];
    var nextValues = [];
    for (var j = 0; j < currentRow.length; j += 1) {
      var firstPreviousValue = previousValues[j];
      var secondPreviousValue = previousValues[j + 1];
      nextValues[j] = currentRow[j] + Math.min(firstPreviousValue, secondPreviousValue);
    }
    values[i] = nextValues;
  }

  return values[triangle.length - 1][0];
};

module.exports = minimumTotal;
