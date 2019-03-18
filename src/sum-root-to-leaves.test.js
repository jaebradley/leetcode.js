var iterativelySumNumbers = require('./sum-root-to-leaves').iterativelySumNumbers;
var recursivelySumNumbers = require('./sum-root-to-leaves').recursivelySumNumbers;
var TreeNode = require('./TreeNode');

describe('iterativelySumNumbers', function() {
  describe('when tree is empty', function() {
    it('is 0', function() {
      expect(iterativelySumNumbers(null)).toBe(0);
    });
  });
  describe('when tree is root', function() {
    it('is root value', function() {
      var root = new TreeNode(10);
      expect(iterativelySumNumbers(root)).toBe(10);
    });
  });
  describe('when tree has left child', function() {
    it('is root + left child value', function() {
      var root = new TreeNode(10);
      root.left = new TreeNode(11);
      expect(iterativelySumNumbers(root)).toBe(111);
    });
  });
  describe('when tree has right child', function() {
    it('is root + right child value', function() {
      var root = new TreeNode(10);
      root.right = new TreeNode(11);
      expect(iterativelySumNumbers(root)).toBe(111);
    });
  });
  describe('when tree has left and right children', function() {
    describe('when tree only has left and right child leaves', function() {
      it('is sum of both', function() {
        var root = new TreeNode(10);
        root.left = new TreeNode(11);
        root.right = new TreeNode(12);
        expect(iterativelySumNumbers(root)).toBe(223);
      });
    });
    describe('when tree has nested child leaves', function() {
      describe('when left left but not left right', function() {
        it('is sum of left left and right', function() {
          var root = new TreeNode(1);
          root.left = new TreeNode(2);
          root.right = new TreeNode(3);
          root.left.left = new TreeNode(4);
          expect(iterativelySumNumbers(root)).toBe(137);
        });
      });
    });
  });
});

describe('sumNumbers', function() {
  describe('when tree is empty', function() {
    it('is 0', function() {
      expect(recursivelySumNumbers(null)).toBe(0);
    });
  });
  describe('when tree is root', function() {
    it('is root value', function() {
      var root = new TreeNode(10);
      expect(recursivelySumNumbers(root)).toBe(10);
    });
  });
  describe('when tree has left child', function() {
    it('is root + left child value', function() {
      var root = new TreeNode(10);
      root.left = new TreeNode(11);
      expect(recursivelySumNumbers(root)).toBe(111);
    });
  });
  describe('when tree has right child', function() {
    it('is root + right child value', function() {
      var root = new TreeNode(10);
      root.right = new TreeNode(11);
      expect(recursivelySumNumbers(root)).toBe(111);
    });
  });
  describe('when tree has left and right children', function() {
    describe('when tree only has left and right child leaves', function() {
      it('is sum of both', function() {
        var root = new TreeNode(10);
        root.left = new TreeNode(11);
        root.right = new TreeNode(12);
        expect(recursivelySumNumbers(root)).toBe(223);
      });
    });
    describe('when tree has nested child leaves', function() {
      describe('when left left but not left right', function() {
        it('is sum of left left and right', function() {
          var root = new TreeNode(1);
          root.left = new TreeNode(2);
          root.right = new TreeNode(3);
          root.left.left = new TreeNode(4);
          expect(recursivelySumNumbers(root)).toBe(137);
        });
      });
    });
  });
});
