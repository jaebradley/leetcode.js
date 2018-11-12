/**
 * https://leetcode.com/problems/house-robber-iii
 * The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:

Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \
     3   1

Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:

Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode}
 * @return {number}
 */
var rob = function(root) {
  var value = dfs(root);

  return Math.max(value.whenRobbing, value.whenNotRobbing);
};

var dfs = function(node) {
  if (!node) {
    return {
      whenRobbing: 0,
      whenNotRobbing: 0,
    };
  }

  var leftSums = dfs(node.left);
  var rightSums = dfs(node.right);

  return {
    whenRobbing: leftSums.whenNotRobbing + rightSums.whenNotRobbing + node.val,
    whenNotRobbing: Math.max(leftSums.whenNotRobbing, leftSums.whenRobbing) + Math.max(rightSums.whenNotRobbing, rightSums.whenRobbing),
  };
}

module.exports = rob;
