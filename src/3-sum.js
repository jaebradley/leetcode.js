/**
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var i,
      j,
      indexValues = [],
      uniqueTripletSums = [],
      uniqueSerializedTripletSums = [],
      tripletSum,
      serializedTripletSum;

  for (i = 0; i < nums.length; i += 1) {
    indexValues[nums[i]] = true;
  }

  for (i = 0; i < nums.length - 1; i += 1) {
    for (j = i + 1; j < nums.length; j += 1) {
      if (indexValues[-(nums[i] + nums[j])]) {
        tripletSum = [
          nums[i],
          nums[j],
          -(nums[i] + nums[j]),
        ];
        serializedTripletSum = tripletSum.sort().toString();
        if (uniqueSerializedTripletSums.indexOf(serializedTripletSum) < 0) {
          uniqueTripletSums.push(tripletSum);
          uniqueSerializedTripletSums.push(serializedTripletSum);
        }
      }
    }
  }

  return uniqueTripletSums;
};

module.exports = threeSum;
