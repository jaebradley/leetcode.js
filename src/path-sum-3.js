/**
 * https://leetcode.com/problems/path-sum-ii/
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var results = [];

  function isLeaf(node) {
    return node.left === node.right && node.left === null;
  }

  function dfs(currentSum, node, values) {
    if (currentSum === sum && isLeaf(node)) {
      results.push(values);
      return;
    }

    if (node.left) {
      var nextLeftCurrentSum = currentSum + node.left.val;
      var nextLeftValues = values.slice();
      nextLeftValues.push(node.left.val);
      dfs(nextLeftCurrentSum, node.left, nextLeftValues);
    }

    if (node.right) {
      var nextRightCurrentSum = currentSum + node.right.val;
      var nextRightValues = values.slice();
      nextRightValues.push(node.right.val);
      dfs(nextRightCurrentSum, node.right, nextRightValues);
    }

    return;
  }

  if (root) {
    dfs(root.val, root, [root.val]);
  }

  return results;
};

module.exports = pathSum;
