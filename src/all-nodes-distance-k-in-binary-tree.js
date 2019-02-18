/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 *
 * We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation:
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.



Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Strategy is to build an undirected adjacency matrix from the binary tree
 * Then BFS through graph / adjacency matrix from the target node, the K number of levels
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  var adjacencyMatrix = [];
  var values = [root];

  while (values.length > 0) {
    var node = values.shift();
    if (node) {
      var neighbors = adjacencyMatrix[node.val] || [];

      if (!adjacencyMatrix[node.val]) {
        adjacencyMatrix[node.val] = neighbors;
      }

      if (node.left) {
        neighbors.push(node.left.val);
        adjacencyMatrix[node.left.val] = [node.val];
        values.push(node.left);
      }

      if (node.right) {
        neighbors.push(node.right.val);
        adjacencyMatrix[node.right.val] = [node.val];
        values.push(node.right);
      }
    }
  }

  var nodes = [target.val];
  var level = 0;
  var visited = [];

  while (level < K) {
    var nextNodes = [];
    nodes.forEach(function(node) {
      if (!visited.includes(node)) {
        adjacencyMatrix[node].forEach(function(neighbor) {
          if (!visited.includes(neighbor)) {
            nextNodes.push(neighbor);
          }
        });
        visited.push(node);
      }
    });
    nodes = nextNodes;
    level += 1;
  }
  return nodes;
};

module.exports = distanceK;
