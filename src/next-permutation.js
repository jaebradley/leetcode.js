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

var nextPermutation = function(values) {
  var i, pivot, start;
  for (i = values.length - 1; i > 0; i -= 1) {
    if (values[i - 1] < values[i]) {
      pivot = i;
      break;
    }
  }

  if (typeof pivot === 'undefined') {
    // if can't find value that's less than next value
    // must be reverse sorted
    // so reversing that should return ascending order
    reverseValues(values, 0, values.length - 1);
    return;
  }

  var nextHighestValue = Number.MAX_SAFE_INTEGER;
  var nextHighestIndex;
  for (start = pivot; start < values.length; start += 1) {
    if (values[start] < nextHighestValue && values[pivot - 1] < nextHighestValue) {
      nextHighestValue = values[start];
      nextHighestIndex = start;
    }
  }

  if (nextHighestIndex) {
    swap(values, pivot - 1, nextHighestIndex);
  }


  reverseValues(values, i, values.length - 1);
};

module.exports = nextPermutation;
