var TreeNode = require('./TreeNode');

/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

* algorithms
* Easy (44.43%)
* Total Accepted:    172.6K
* Total Submissions: 386.3K
* Testcase Example:  '[-10,-3,0,5,9]'

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.




Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

var sortedArrayToBST = function(nums) {
    if (nums.length < 1) {
      return null;
    }

    var middleIndex = Math.floor(nums.length / 2);
    var middleValue = nums[middleIndex];
    var left = nums.slice(0, middleIndex);
    var right = nums.slice(middleIndex + 1, nums.length);

    var currentNode = new TreeNode(middleValue);
    currentNode.left = sortedArrayToBST(left);
    currentNode.right = sortedArrayToBST(right);

    return currentNode;
};

module.exports = sortedArrayToBST;
