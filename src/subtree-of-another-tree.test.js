var isSubtree = require('./subtree-of-another-tree');
var TreeNode = require('./TreeNode');

describe('isSubtree', function() {
  it('identical trees are subtrees', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    root.left = left;
    root.right = right;
    expect(isSubtree(root, root)).toBe(true);
  });

  it('leaf is subtree of tree', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    root.left = left;
    root.right = right;
    expect(isSubtree(root, left)).toBe(true);
  });

  it('left subtree is subtree of tree', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    var leftLeft = new TreeNode(4);
    var leftRight = new TreeNode(5);
    var rightLeft = new TreeNode(6);
    var rightRight = new TreeNode(7);
    root.left = left;
    root.right = right;
    left.left = leftLeft;
    left.right = leftRight;
    right.left = rightLeft;
    right.right = rightRight;
    expect(isSubtree(root, left)).toBe(true);
  });

  it('right subtree is subtree of tree', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    var leftLeft = new TreeNode(4);
    var leftRight = new TreeNode(5);
    var rightLeft = new TreeNode(6);
    var rightRight = new TreeNode(7);
    root.left = left;
    root.right = right;
    left.left = leftLeft;
    left.right = leftRight;
    right.left = rightLeft;
    right.right = rightRight;
    expect(isSubtree(root, right)).toBe(true);
  });

  it('fragment of right subtree is not subtree of tree', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    var leftLeft = new TreeNode(4);
    var leftRight = new TreeNode(5);
    var rightLeft = new TreeNode(6);
    var rightRight = new TreeNode(7);
    var rightRightRight = new TreeNode(8);
    root.left = left;
    root.right = right;
    left.left = leftLeft;
    left.right = leftRight;
    right.left = rightLeft;
    right.right = rightRight;
    right.right.right = rightRightRight;
    var fragment = new TreeNode(3);
    fragment.left = new TreeNode(4);
    fragment.right = new TreeNode(5);
    expect(isSubtree(root, fragment)).toBe(false);
  });
});
