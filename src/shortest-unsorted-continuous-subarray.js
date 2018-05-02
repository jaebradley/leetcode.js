/**
https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/

* algorithms
* Easy (29.14%)
* Total Accepted:    31.9K
* Total Submissions: 109.7K
* Testcase Example:  '[2,6,4,8,10,9,15]'

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order,too.

You need to find the shortest such subarray and output its length.

Example 1:

Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.



Note:

Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <= .
*/

// Because the array should be monotonically increasing
// If we find a point where it's not (i.e. the number at the given index is less
// than the maximum value we've seen up to that index) then we need to mark that
// point as the end of the subarray
// Similar concept for the start of the subarray except working back from the end
// of the array, since it should be (from that perspective) monotonically decreasing
var findUnsortedSubarray = function(nums) {
  var length = nums.length;
  var maximumValue = nums[0];
  var minimumValue = nums[length - 1];
  var startIndex = -1;
  var endIndex = -2;

  for (var i = 1; i < nums.length; i++) {
    maximumValue = Math.max(nums[i], maximumValue);
    minimumValue = Math.min(nums[length - 1 - i], minimumValue);

    if (nums[i] < maximumValue) {
      endIndex = i;
    }

    if (nums[length - 1 - i] > minimumValue) {
      startIndex = length - 1 - i;
    }
  }

  return endIndex - startIndex + 1;
};

module.exports = findUnsortedSubarray;
