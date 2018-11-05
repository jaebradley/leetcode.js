/**
 * https://leetcode.com/problems/find-bottom-left-tree-node/
 * Given a binary tree, find the leftmost node in the last row of the tree.

Example 1:

Input:


    2
   / \
  1   3

Output:
1
Example 2:
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  var previousValues = [],
      nextValues = [],
      values = [root],
      node,
      i;

  while (values.length > 0) {
    nextValues = [];

    for (i = 0; i < values.length; i += 1) {
      node = values[i];
      if (node.left) {
        nextValues.push(node.left);
      }

      if (node.right) {
        nextValues.push(node.right);
      }
    }

    previousValues = values;
    values = nextValues;
  }

  return previousValues[0].val;
};

module.exports = findBottomLeftValue;
