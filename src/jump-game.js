/**
https://leetcode.com/problems/jump-game/description/

* algorithms
* Medium (29.52%)
* Total Accepted:    166.3K
* Total Submissions: 561.9K
* Testcase Example:  '[2,3,1,1,4]'

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:


Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


Example 2:


Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

/**
Approach is to iterate through input array, while keeping track of maximum index.
For each index, the maximum index is either the current maximum index or the "jump" length at the current index (plus the current index value)
Stop when the maximum index is less than the current index - this means the current index is not reachable
*/

var canJump = function(nums) {
    var maximumLength = 0, i;
    for (i = 0; i < nums.length && maximumLength >= i; i += 1) {
      maximumLength = Math.max(maximumLength, nums[i] + i);
    }
    return maximumLength >= nums.length - 1;
};

module.exports = canJump;
