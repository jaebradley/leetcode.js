/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
Idea is to track the existing non-leaf node sums at each level.
And then recursively incrementing the sum until getting to leaf.
And then returning the total calculated sums.
*/

function sum(node, currentSum) {
  if (!node) {
    return 0;
  }

  if (!node.left && !node.right) {
    return currentSum * 10 + node.val;
  }

  return sum(node.left, currentSum * 10 + node.val) + sum(node.right, currentSum * 10 + node.val);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function recursivelySumNumbers(root) {
  return sum(root, 0);
};

/**
 * Idea is to keep track of values in a stack.
 * Pop the top value and use it as the current node.
 * Using the current node's value, if there are child nodes, incrementing their values based on the current node.
 * If the current node is a leaf, then incrementing the global sum with it's value
 * (which, due to the processing of nodes before it, should represent the sum of all prior nodes)
 */

function iterativelySumNumbers(root) {
  var sum = 0;

  if (!root) {
    return sum;
  }

  var values = [root];

  while (values.length > 0) {
    var currentNode = values.pop();

    if (currentNode.right) {
      currentNode.right.val = currentNode.val * 10 + currentNode.right.val;
      values.push(currentNode.right);
    }

    if (currentNode.left) {
      currentNode.left.val = currentNode.val * 10 + currentNode.left.val;
      values.push(currentNode.left);
    }

    if (!currentNode.left && !currentNode.right) {
      sum += currentNode.val;
    }
  }

  return sum;
}

module.exports = {
  iterativelySumNumbers: iterativelySumNumbers,
  recursivelySumNumbers: recursivelySumNumbers,
};
