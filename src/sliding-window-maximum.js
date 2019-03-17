/**
 * Basically, just stole it from https://leetcode.com/problems/sliding-window-maximum/discuss/65884/Java-O(n)-solution-using-deque-with-explanation
 * Here's my explanation
 * The deque in this case is "just" a JS array.
 * The deque is going to store indices of values.
 * As numbers are evaluated we
 * 1. Remove any numbers from front of deque that are not in the sliding window index range (current value index - window size + 1)
 * 2. Remove any numbers from back of deque that are less than current value.
 *    The idea here is that if we're using deque to keep track of reasonable values in window, if the current value is greater previous window values
 *    it's going to be a better candidate within the existing window, and future windows, as well.
 *    Basically, the deque order should be in sequential order AND value order (for window range)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  var results = [];
  var values = [];

  for (var i = 0; i < nums.length; i += 1) {
    var firstIndex = i - k + 1;
    var firstValue = values[0];

    while (firstValue != null && firstValue < firstIndex) {
      values.shift();
      firstValue = values[0];
    }

    var nextValue = nums[i];
    var lastValue = nums[values[values.length - 1]];

    while (lastValue != null && lastValue < nextValue) {
      values.pop();
      lastValue = nums[values[values.length - 1]];
    }

    values.push(i);

    var maxValueIndex = values[0];

    if (maxValueIndex != null && i >= k - 1) {
      var maxValue = nums[maxValueIndex];
      results.push(maxValue);
    }
  }

  return results;
};

module.exports = maxSlidingWindow;
