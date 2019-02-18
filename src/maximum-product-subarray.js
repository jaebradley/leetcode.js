/**
 * https://leetcode.com/problems/maximum-product-subarray/
 *
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * Ok, so the strategy is similar to Kadane's algorithm (https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm)
 * Basically, the idea is that maximum subarray is either
 *   current max value * next value
 *   or current min value * next value
 *   or next value itself
 * Use references to keep track of global max / mins (where first value is max and min)
 * When next value switch signs, flip the current max and min value
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  var firstValue = nums[0];
  var maxProductAtIndex = firstValue;
  var minProductAtIndex = firstValue;
  var maxProduct = firstValue;
  var minProduct = firstValue;
  var nextMaxProductAtIndex = firstValue;
  var nextMinProductAtIndex = firstValue;
  var num = firstValue;

  for (var i = 1; i < nums.length; i += 1) {
    num = nums[i];
    var nextMaxProductAtIndex = maxProductAtIndex * num;
    var nextMinProductAtIndex = minProductAtIndex * num;
    if (nextMaxProductAtIndex >= nextMinProductAtIndex) {
      maxProductAtIndex = Math.max(num, nextMaxProductAtIndex);
      minProductAtIndex = Math.min(num, nextMinProductAtIndex);
    } else {
      minProductAtIndex = Math.min(num, nextMaxProductAtIndex);
      maxProductAtIndex = Math.max(num, nextMinProductAtIndex);
    }

    maxProduct = Math.max(maxProduct, maxProductAtIndex);
    minProduct = Math.min(minProduct, minProductAtIndex);
  }

  return maxProduct;
};

module.exports = maxProduct;
