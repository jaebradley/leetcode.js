var largestValues = require('./find-largest-value-in-each-tree-row');
var TreeNode = require('./TreeNode');

describe('largestValues', function() {
  var rootValue;
  var root;

  describe('when root is null', function() {
    it('is empty array', function() {
      expect(largestValues(null)).toEqual([]);
    });
  });

  describe('when height of 0', function() {
    beforeEach(function() {
      rootValue = 1;
      root = new TreeNode(rootValue);
    });

    it('is only root value', function() {
      expect(largestValues(root)).toEqual([rootValue]);
    });
  });

  describe('when height is 1 or greater', function() {
    var leftChildValue;
    var rightChildValue;

    describe('when only left child', function() {
      beforeEach(function() {
        rootValue = 1;
        leftChildValue = 2;

        root = new TreeNode(rootValue);
        root.left = new TreeNode(leftChildValue);
      });

      it('is root value and left value', function() {
        expect(largestValues(root)).toEqual([rootValue, leftChildValue]);
      });
    });

    describe('when only right child', function() {
      beforeEach(function() {
        rootValue = 1;
        rightChildValue = 2;

        root = new TreeNode(rootValue);
        root.right = new TreeNode(rightChildValue);
      });

      it('is root value and right value', function() {
        expect(largestValues(root)).toEqual([rootValue, rightChildValue]);
      });
    });

    describe('when left and right children', function() {
      describe('when left child is greater', function() {
        beforeEach(function() {
          rootValue = 1;
          leftChildValue = 3;
          rightChildValue = 2;

          root = new TreeNode(rootValue);
          root.left = new TreeNode(leftChildValue);
          root.right = new TreeNode(rightChildValue);
        });

        it('is root value and left value', function() {
          expect(largestValues(root)).toEqual([rootValue, leftChildValue]);
        });
      });
    });
  });
});
