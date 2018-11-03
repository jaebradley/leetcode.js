/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var values = [],
      currentValues,
      currentValue,
      nextValues,
      i;

  if (!root) {
    return values;
  }

  currentValues = [root];

  while (currentValues.length > 0) {

    nextValues = [];

    for (i = 0; i < currentValues.length; i += 1) {
      currentValue = currentValues[i];

      if (currentValue.left) {
        nextValues.push(currentValue.left);
      }

      if (currentValue.right) {
        nextValues.push(currentValue.right);
      }

      currentValues[i] = currentValue.val;
    }

    values.splice(0, 0, currentValues);

    currentValues = nextValues;
  }

  return values;
};

module.exports = levelOrderBottom;
