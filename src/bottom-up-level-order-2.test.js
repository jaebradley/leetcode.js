var levelOrderBottom = require('./bottom-up-level-order-2');
var TreeNode = require('./TreeNode');

describe('levelOrderBottom', function() {
  var rootValue = null;
  var root = null;

  describe('when tree is null', function() {
    it('node values are empty', function() {
      expect(levelOrderBottom(root)).toEqual([]);
    });
  });

  describe('when tree has a height of one', function() {
    beforeEach(function() {
      rootValue = 1;
      root = new TreeNode(rootValue);
    });

    it('contains only root value', function() {
      expect(levelOrderBottom(root)).toEqual([[rootValue]]);
    });
  });

  describe('when tree has a height of two', function() {
    var leftChildValue = null;
    var leftChild = null;
    var rightChildValue = null;
    var rightChild = null;

    beforeEach(function() {
      rootValue = 1;
      root = new TreeNode(rootValue);
    });

    describe('when tree only has left child', function() {
      beforeEach(function() {
        leftChildValue = 2;
        leftChild = new TreeNode(leftChildValue);
        root.left = leftChild;
      });

      it('contains only left child and root values', function() {
        expect(levelOrderBottom(root)).toEqual([[leftChildValue], [rootValue]]);
      });
    });

    describe('when tree only has right child', function() {
      beforeEach(function() {
        rightChildValue = 3;
        rightChild = new TreeNode(rightChildValue);
        root.right = rightChild;
      });

      it('contains only right child and root values', function() {
        expect(levelOrderBottom(root)).toEqual([[rightChildValue], [rootValue]]);
      });
    });

    describe('when tree has left and right children', function() {
      beforeEach(function() {
        leftChildValue = 2;
        leftChild = new TreeNode(leftChildValue);
        root.left = leftChild;

        rightChildValue = 3;
        rightChild = new TreeNode(rightChildValue);
        root.right = rightChild;
      });

      it('contains right and left children values, and root value', function() {
        expect(levelOrderBottom(root)).toEqual([[leftChildValue, rightChildValue], [rootValue]]);
      });
    });
  });
});
