var pathSum = require('./path-sum-3');
var TreeNode = require('./TreeNode');

describe('pathSum3', function() {
  var target,
      rootValue,
      binaryTree;

  describe('when binary tree is null', function() {
    beforeEach(function() {
      target = 1;
      binaryTree = null;
    });

    it('is an empty array', function() {
      expect(pathSum(binaryTree, target)).toEqual([]);
    });
  });

  describe('when binary tree is root', function() {
    beforeEach(function() {
      target = 1;
      rootValue = target;
    });

    describe('when target matches root value', function() {
      beforeEach(function() {
        binaryTree = new TreeNode(rootValue);
      });

      it('is an array with only the root value', function() {
        expect(pathSum(binaryTree, target)).toEqual([[target]]);
      });
    });

    describe('when target does not match root value', function() {
      beforeEach(function() {
        target = 2;
        rootValue = target;
        binaryTree = new TreeNode(rootValue);
      });

      it('is an empty array', function() {
        expect(pathSum(binaryTree, 1)).toEqual([]);
      });
    });
  });

  describe('when binary tree only has left child', function() {
    var leftChildValue;

    describe('when left child and root values match target', function() {
      beforeEach(function() {
        target = 3;
        rootValue = 1;
        leftChildValue = 2;
        binaryTree = new TreeNode(rootValue);
        binaryTree.left = new TreeNode(leftChildValue);;
      });

      it('is an array with root and left child values', function() {
        expect(pathSum(binaryTree, target)).toEqual([[rootValue, leftChildValue]]);
      });
    });

    describe('when left child and root values do not match target', function() {
      beforeEach(function() {
        target = 3;
        rootValue = 1;
        leftChildValue = 10;
        binaryTree = new TreeNode(rootValue);
        binaryTree.left = new TreeNode(leftChildValue);;
      });

      it('is an empty array', function() {
        expect(pathSum(binaryTree, target)).toEqual([]);
      });
    });
  });

  describe('when binary tree only has right child', function() {
    var rightChildValue;

    describe('when right child and root values match target', function() {
      beforeEach(function() {
        target = 3;
        rootValue = 1;
        rightChildValue = 2;
        binaryTree = new TreeNode(rootValue);
        binaryTree.right = new TreeNode(rightChildValue);;
      });

      it('is an array with root and left child values', function() {
        expect(pathSum(binaryTree, target)).toEqual([[rootValue, rightChildValue]]);
      });
    });

    describe('when right child and root values do not match target', function() {
      beforeEach(function() {
        target = 3;
        rootValue = 1;
        rightChildValue = 10;
        binaryTree = new TreeNode(rootValue);
        binaryTree.right = new TreeNode(rightChildValue);;
      });

      it('is an array with root and left child values', function() {
        expect(pathSum(binaryTree, target)).toEqual([]);
      });
    });
  });

  describe('when binary tree has a height of three', function() {
    describe('when binary tree is balanced', function() {
      beforeEach(function() {
        binaryTree = new TreeNode(1);
        binaryTree.left = new TreeNode(2);
        binaryTree.right = new TreeNode(3);
        binaryTree.left.left = new TreeNode(4);
        binaryTree.left.right = new TreeNode(5);
        binaryTree.right.left = new TreeNode(6);
        binaryTree.right.right = new TreeNode(7);
      });

      describe('when path to leaf matches', function() {
        beforeEach(function() {
          target = 7;
        });

        it('returns matching path', function() {
          expect(pathSum(binaryTree, target)).toEqual([[1, 2, 4]]);
        });
      });

      describe('when path to leaf does not match', function() {
        beforeEach(function() {
          target = -1;
        });

        it('returns empty array', function() {
          expect(pathSum(binaryTree, target)).toEqual([]);
        });
      });
    });

    describe('when binary tree is not balanced', function() {
      beforeEach(function() {
        binaryTree = new TreeNode(1);
        binaryTree.left = new TreeNode(2);
        binaryTree.right = new TreeNode(3);
        binaryTree.right.left = new TreeNode(4);
        binaryTree.right.right = new TreeNode(5);
      });

      describe('when leaf node at height of two matches', function() {
        beforeEach(function() {
          target = 3;
        });

        it('returns matching path', function() {
          expect(pathSum(binaryTree, target)).toEqual([[1, 2]]);
        });
      });

      describe('when leaf node at height of three matches', function() {
        beforeEach(function() {
          target = 8;
        });

        it('returns matching path', function() {
          expect(pathSum(binaryTree, target)).toEqual([[1, 3, 4]]);
        });
      });

      describe('when non-leaf node at height of two matches', function() {
        beforeEach(function() {
          target = 4;
        });

        it('is an empty array', function() {
          expect(pathSum(binaryTree, target)).toEqual([]);
        });
      })
    });
  });
});
