/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
var rightSideView = function(root) {
  var values = [],
      children = [],
      next = [root],
      lastNext,
      child;

  while (children.length > 0 || next.length > 0) {
    if (children.length === 0) {
      lastNext = next[next.length - 1];
      if (lastNext) {
        values.push(lastNext.val);
      }
      children = next;
      next = [];
    } else {
      child = children.shift();
      if (child) {
        if (child.left) {
          next.push(child.left);
        }

        if (child.right) {
          next.push(child.right);
        }
      }
    }
  }

  return values;
};

module.exports = rightSideView;
