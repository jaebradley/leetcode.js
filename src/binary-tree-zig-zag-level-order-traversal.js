/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

* algorithms
* Medium (37.28%)
* Total Accepted:    148.3K
* Total Submissions: 393.8K
* Testcase Example:  '[3,9,20,null,null,15,7]'

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).


For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7



return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]

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

var helper = function(node, level, values) {
  if (node === null || node === undefined || node.val === null ) {
    return;
  }

  if (!values[level]) {
    values[level] = [];
  }

  var levelValues = values[level];

  if (level % 2 === 0) {
    levelValues.push(node.val);
  } else {
    levelValues.unshift(node.val);
  }

  helper(node.left, level + 1, values);
  helper(node.right, level + 1, values);
}

var zigzagLevelOrder = function(root) {
  var values = [];
  helper(root, 0, values);
  return values;
};

module.exports = zigzagLevelOrder;
