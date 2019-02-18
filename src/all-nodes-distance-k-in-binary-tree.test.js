var distanceK = require('./all-nodes-distance-k-in-binary-tree');
var TreeNode = require('./TreeNode');

describe('distanceK', function() {
  describe('when distance is zero', function() {
    describe('when target is three', function() {
      it('is 3', function() {
        var root = new TreeNode(0);
        root.left = new TreeNode(1);
        root.left.left = new TreeNode(2);
        root.left.left.left = new TreeNode(3);
        root.left.left.left.left = new TreeNode(4);
        expect(distanceK(root, new TreeNode(3), 0)).toEqual([3]);
      });
    });
  })
  describe('when distance is two', function() {
    it('is [7, 4, 1]', function() {
      var root = new TreeNode(3);
      root.left = new TreeNode(5);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(6);
      root.left.right = new TreeNode(2);
      root.left.right.left = new TreeNode(7);
      root.left.right.right = new TreeNode(4);
      root.right.left = new TreeNode(0);
      root.right.right = new TreeNode(8);

      expect(distanceK(root, new TreeNode(5), 2)).toEqual([1, 7, 4]);
    });
  });
});
