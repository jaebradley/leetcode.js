/**
 * https://leetcode.com/problems/container-with-most-water
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var startIndex = 0,
        endIndex = height.length - 1,
        maxArea = 0,
        area = 0;

    while (startIndex < endIndex) {
      area = (endIndex - startIndex) * Math.min(height[startIndex], height[endIndex]);
      if (area > maxArea) {
        maxArea = area;
      }
      if (height[startIndex] > height[endIndex]) {
        endIndex -= 1;
      } else {
        startIndex += 1;
      }
    }

    return maxArea;
};

module.exports = maxArea;
