/**
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.
If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/**
 * Start from beginning of array
 * Keep track of index of greatest value seen
 * While current index is greater than top of stack update answer array with diff in index
 * Push current index onto stack
 * O(n) in best case (perfectly ordered)
 * O(n^2) in worst case (perfectly unordered)
 * @param {array of integers} temperatures
 */

function dailyTemperatures(temperatures) {
  var answers = [];
  for (var i = 0; i < temperatures.length; i += 1) {
    answers[i] = 0;
  }

  var stack = [];
  temperatures.forEach(function (temperature, index) {
    while (stack.length && temperature > stack[stack.length - 1]) {
      var indexToUpdate = stack.pop();
      answers[indexToUpdate] = index - indexToUpdate;
    }

    stack.push(index);
  });

  return answers;
}

module.exports = dailyTemperatures;
