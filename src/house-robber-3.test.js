var rob = require('./house-robber-3');
var TreeNode = require('./TreeNode');

describe('rob', function() {
  var rootValue;
  var root;

  describe('when height of two', function() {
    var leftValue;
    var rightValue;
    var left;
    var right;

    describe('when root is greater than children', function() {
      beforeEach(function() {
        rootValue = 10;
        root = new TreeNode(rootValue);
        leftValue = 1;
        left = new TreeNode(leftValue);
        rightValue = 2;
        right = new TreeNode(rightValue);
        root.left = left;
        root.right = right;
      });
      it('is root', function() {
        expect(rob(root)).toEqual(rootValue);
      });
    });

    describe('when root is less than children', function() {
      beforeEach(function() {
        rootValue = 1;
        root = new TreeNode(rootValue);
        leftValue = 1;
        left = new TreeNode(leftValue);
        rightValue = 2;
        right = new TreeNode(rightValue);
        root.left = left;
        root.right = right;
      });
      it('is sum of children', function() {
        expect(rob(root)).toEqual(leftValue + rightValue);
      });
    });
  });

  describe('when height of three', function() {
    var leftValue;
    var rightValue;
    var leftLeftValue;
    var leftRightValue;
    var rightLeftValue;
    var rightRightValue;

    describe('when should not rob root', function() {
      beforeEach(function() {
        rootValue = 1;
        leftValue = 10;
        rightValue = 11;
        leftLeftValue = 2;
        leftRightValue = 3;
        rightLeftValue = 4;
        rightRightValue = 5;
        root = new TreeNode(rootValue);
        root.left = new TreeNode(leftValue);
        root.right = new TreeNode(rightValue);
        root.left.left = new TreeNode(leftLeftValue);
        root.left.right = new TreeNode(leftRightValue);
        root.right.left = new TreeNode(rightLeftValue);
        root.right.right = new TreeNode(rightRightValue);
      });

      it('is sum of direct root children', function() {
        expect(rob(root)).toEqual(leftValue + rightValue);
      });
    });
  });
});
