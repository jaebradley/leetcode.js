var rightSideView = require('./binary-tree-right-side-view');
var TreeNode = require('./TreeNode');

describe('rightSideView', function() {
  describe('when tree is empty', function() {
    it('is null', function() {
      expect(rightSideView(null)).toEqual([]);
    });
  });

  describe('when tree does not have children', function() {
    it('is root value', function() {
      var root = new TreeNode(1);
      expect(rightSideView(root)).toEqual([1]);
    });
  });

  describe('when tree only has left child', function() {
    it('is root value', function() {
      var root = new TreeNode(1);
      root.left = new TreeNode(2);

      expect(rightSideView(root)).toEqual([1, 2]);
    });
  });

  describe('when tree only has right child', function() {
    it('is root and right child value', function() {
      var root = new TreeNode(1);
      root.right = new TreeNode(2);

      expect(rightSideView(root)).toEqual([1, 2]);
    });
  });

  describe('when tree has right and left child', function() {
    it('is root and right child value', function() {
      var root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);

      expect(rightSideView(root)).toEqual([1, 3]);
    });
  });

  describe('when tree has one left grandchild', function() {
    it('is root, right, and left grandchild', function() {
      var root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);

      expect(rightSideView(root)).toEqual([1, 3, 4]);
    });
  });

  describe('when tree has one left grandchild and one right grandchild', function() {
    it('is root, right, and right grandchild', function() {
      var root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.right = new TreeNode(4);
      root.right.right = new TreeNode(5);

      expect(rightSideView(root)).toEqual([1, 3, 5]);
    })
  })
});
