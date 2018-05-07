/**
 * https://leetcode.com/problems/validate-binary-search-tree/description/

* algorithms
* Medium (24.07%)
* Total Accepted:    236.8K
* Total Submissions: 983.4K
* Testcase Example:  '[2,1,3]'

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:


The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:


Input:
2
/ \
1   3
Output: true


Example 2:


5
/ \
1   4
/ \
3   6
Output: false
Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
is 5 but its right child's value is 4.
*/

// Need to check that right node is greater than parent each time
// Need to check that left node is less than parent each time
var isValidBST = function(root) {
  return isValidBSTHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

var isValidBSTHelper = function(node, minimum, maximum) {
  if (node === null) {
    return true;
  }

  return node.val > minimum
    && node.val < maximum
    && isValidBSTHelper(node.left, minimum, node.val)
    && isValidBSTHelper(node.right, node.val, maximum);
}

module.exports = isValidBST;
