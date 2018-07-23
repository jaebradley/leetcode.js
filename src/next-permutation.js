/**
 * https://leetcode.com/problems/next-permutation/description/

algorithms
Medium (29.03%)
Total Accepted: 151.2K
Total Submissions: 519.9K
Testcase Example: '[1,2,3]'
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

var swap = function(values, startIndex, endIndex) {
  var temp = values[startIndex];
  values[startIndex] = values[endIndex];
  values[endIndex] = temp;
}

var reverseValues = function(values, startIndex, endIndex) {
  var i;
  for (i = startIndex; i <= (startIndex + endIndex) / 2; i += 1 ) {
    swap(values, i, startIndex + endIndex - i);
  }
}

var nextPermutation = function(nums) {
  var nextHighestValue = Number.MAX_SAFE_INTEGER,
      nextHighestValueIndex,
      pivotIndex = nums.length - 1,
      startIndex;

  // move from right to left
  // until find index where the value left of it is less than current value
  // this implies that everything to right is in descending order
  while (pivotIndex > 0 && nums[pivotIndex - 1] >= nums[pivotIndex]) {
    pivotIndex -= 1;
  }

  // pivotIndex === 0
  // if can't find value that's less than next value
  // must be reverse sorted
  // so reversing that should return ascending order


  if (pivotIndex > 0) {
    // from left back to right
    // replace current pivot index with next highest value
    for (startIndex = pivotIndex; startIndex < nums.length; startIndex += 1) {
      if (nums[startIndex] <= nextHighestValue && nums[pivotIndex - 1] < nums[startIndex]) {
        nextHighestValue = nums[startIndex];
        nextHighestValueIndex = startIndex;
      }
    }

    if (nextHighestValueIndex !== undefined) {
      swap(nums, pivotIndex - 1, nextHighestValueIndex);
    }
  }

  // ensure that all nums from pivotIndex to end are now in ascending order
  reverseValues(nums, pivotIndex, nums.length - 1);
};

module.exports = nextPermutation;
