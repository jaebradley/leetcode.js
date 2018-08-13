/**
 * [53] Maximum Subarray

https://leetcode.com/problems/maximum-subarray/description/

* algorithms
* Easy (40.75%)
* Total Accepted:    347.5K
* Total Submissions: 848.8K
* Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:


Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.


Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maximumValue = nums[0];
  var maximumSums = [nums[0]];
  for (var i = 1; i < nums.length; i += 1) {
    var number = nums[i];
    var previousMaximumSum = maximumSums[i - 1];
    var maximumValueForNumber = Math.max(previousMaximumSum + number, number);
    if (maximumValueForNumber > maximumValue) {
      maximumValue = maximumValueForNumber;
    }
    maximumSums[i] = maximumValueForNumber;
  }
  return maximumValue;
};

module.exports = maxSubArray;
