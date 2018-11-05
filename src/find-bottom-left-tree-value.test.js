var findBottomLeftValue = require('./find-bottom-left-tree-value');
var TreeNode = require('./TreeNode');

describe('findBottomLeftValue', function() {
  var rootValue;
  var root;

  beforeEach(function() {
    rootValue = 1;
    root = new TreeNode(rootValue);
  });

  describe('when root has a height of 0', function() {
    it('is root value', function() {
      expect(findBottomLeftValue(root)).toEqual(rootValue);
    });
  });

  describe('when root has a height of 1', function() {
    var leftChildValue;
    var rightChildValue;
    var leftChild;
    var rightChild;

    describe('when root only has right child', function() {
      beforeEach(function() {
        rightChildValue = 2;
        rightChild = new TreeNode(rightChildValue);
        root.right = rightChild;
      });

      it('is right value', function() {
        expect(findBottomLeftValue(root)).toEqual(rightChildValue);
      });
    });

    describe('when root only has left child', function() {
      beforeEach(function() {
        leftChildValue = 2;
        leftChild = new TreeNode(leftChildValue);
        root.left = leftChild;
      });

      it('is left value', function() {
        expect(findBottomLeftValue(root)).toEqual(leftChildValue);
      });
    });

    describe('when root has both left and right children', function() {
      beforeEach(function() {
        leftChildValue = 2;
        leftChild = new TreeNode(leftChildValue);
        root.left = leftChild;

        rightChildValue = 3;
        rightChild = new TreeNode(rightChildValue);
        root.right = rightChild;
      });

      it('is left value', function() {
        expect(findBottomLeftValue(root)).toEqual(leftChildValue);
      });
    });
  });

  describe('when root has height of two', function() {
    describe('when root has both left and right children', function() {
      beforeEach(function() {
        root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
      });

      it('returns left leaf node value', function() {
        expect(findBottomLeftValue(root)).toEqual(4);
      });
    });

    describe('when root has left left children', function() {
      beforeEach(function() {
        root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
      });

      it('returns left leaf node value', function() {
        expect(findBottomLeftValue(root)).toEqual(4);
      });
    });

    describe('when root has left right children', function() {
      beforeEach(function() {
        root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
      });

      it('returns left leaf node value', function() {
        expect(findBottomLeftValue(root)).toEqual(4);
      });
    });

    describe('when root has right left children', function() {
      beforeEach(function() {
        root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
      });

      it('returns left leaf node value', function() {
        expect(findBottomLeftValue(root)).toEqual(4);
      });
    });

    describe('when root has right right children', function() {
      beforeEach(function() {
        root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.right = new TreeNode(4);
      });

      it('returns left leaf node value', function() {
        expect(findBottomLeftValue(root)).toEqual(4);
      });
    });
  });
});
