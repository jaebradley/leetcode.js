/**
 * Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false
*/

/**
 * If keep track of two decreasing sequences
 * one for smallest number in decreasing sequence
 * other for second smallest number in decreasing sequence
 * than any number greater than either should indicate an increasing subsequence at some point in time
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  var first = Number.MAX_SAFE_INTEGER;
  var second = Number.MAX_SAFE_INTEGER;

  for (var i = 0; i < nums.length; i += 1) {
    var value = nums[i];

    if (value <= first) {
      first = value;
    } else if (value <= second) {
      second = value;
    } else {
      return true;
    }
  }

  return false;
};

module.exports = increasingTriplet;
