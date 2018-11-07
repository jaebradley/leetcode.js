/**
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row/
 * You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
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
 * @return {number[]}
 */
var largestValues = function(root) {
  var nodes = [],
      largestValues = [],
      currentLargestValue = Number.MIN_SAFE_INTEGER,
      nextNodes = [],
      i,
      currentNode;

  if (!root) {
    return largestValues;
  }

  nodes.push(root);

  while (nodes.length > 0) {
    nextNodes = [];
    currentLargestValue = Number.MIN_SAFE_INTEGER;

    for (i = 0; i < nodes.length; i += 1) {
      currentNode = nodes[i];

      if (currentNode.val > currentLargestValue) {
        currentLargestValue = currentNode.val;
      }

      if (currentNode.left) {
        nextNodes.push(currentNode.left);
      }

      if (currentNode.right) {
        nextNodes.push(currentNode.right);
      }
    }

    largestValues.push(currentLargestValue);
    nodes = nextNodes;
  }

  return largestValues;
};

module.exports = largestValues;
