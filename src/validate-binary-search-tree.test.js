var TreeNode = require('./TreeNode');
var isValidBST = require('./validate-binary-search-tree');

describe('isValidBST', function() {
  it('true for empty tree', function() {
    expect(isValidBST(null)).toBe(true);
  });

  it('false when left node is greater than parent', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    root.left = left;
    root.right = right;

    expect(isValidBST(root)).toBe(false);
  });

  it('false when right node is less than root', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(-1);
    var right = new TreeNode(-3);
    root.left = left;
    root.right = right;

    expect(isValidBST(root)).toBe(false);
  });

  it('false when left-most leaf of two degree BST is invalid', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(-10);
    var right = new TreeNode(10);
    var leftLeft = new TreeNode(10);
    var leftRight = new TreeNode(-5);
    var rightLeft = new TreeNode(5);
    var rightRight = new TreeNode(15);
    root.left = left;
    root.right = right;
    left.left = leftLeft;
    left.right = leftRight;
    right.left = rightLeft;
    right.right = rightRight;

    expect(isValidBST(root)).toBe(false);
  });

  it('true when two degree BST is valid', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(-10);
    var right = new TreeNode(-15);
    var leftLeft = new TreeNode(10);
    var leftRight = new TreeNode(-5);
    var rightLeft = new TreeNode(5);
    var rightRight = new TreeNode(15);
    root.left = left;
    root.right = right;
    left.left = leftLeft;
    left.right = leftRight;
    right.left = rightLeft;
    right.right = rightRight;

    expect(isValidBST(root)).toBe(false);
  });
})
