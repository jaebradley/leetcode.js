/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * If the root does not have the key value then recurse through left subtree if key is less than root val or right if greater
 * Either subtree is subproblem where the new root is now the left or right child from previous node
 * So can call deleteNode again on this subtree
 * When a match is found, if no left child exists, replace node with right child
 * If no right child exists, replace node with left child
 * If both children exist, replace node with smallest child in right subtree
 * This will involve going through right subtree to find smallest child
 * And then going through right subtree again to remove the found child
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

  if (root == null) {
    return null;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    }

    var minimumNode = root.right;

    while (minimumNode.left != null) {
      minimumNode = minimumNode.left;
    }

    root.val = minimumNode.val;
    root.right = deleteNode(root.right, root.val);
  }

  return root;
};

module.exports = deleteNode;
