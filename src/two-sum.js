/**
 * https://leetcode.com/problems/two-sum/description/

* algorithms
* Easy (37.87%)
* Total Accepted:    897.7K
* Total Submissions: 2.4M
* Testcase Example:  '[2,7,11,15]\n9'

Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:


Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

var twoSum = function(nums, target) {
  var differences = {};
  for (var i = 0; i < nums.length; i++) {
    var currentNumber = nums[i];
    var match = target - currentNumber;
    var matchingIndex = differences[match];
    if (typeof matchingIndex !== 'undefined') {
      return [matchingIndex, i];
    }
    differences[currentNumber] = i;
  }

  throw new Error('Expected to find sum');
};

module.exports = twoSum;
