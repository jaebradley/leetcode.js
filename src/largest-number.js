/**
 * https://leetcode.com/problems/largest-number/
 * Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  var decreasingValues = nums.sort(combineValuesInDecreasingOrder);
  var allZeroes = decreasingValues.every(function(value) { return value === 0 });
  if (allZeroes) {
    return '0';
  }
  return decreasingValues.join('');
};

var combineValuesInDecreasingOrder = function(firstValue, secondValue) {
  return (String(secondValue) + String(firstValue)) - (String(firstValue) + String(secondValue));
}

module.exports = largestNumber;
