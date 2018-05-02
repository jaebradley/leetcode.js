var TreeNode = require('./TreeNode');
var mergeTrees = require('./merge-two-binary-trees');

describe('mergeTrees', function() {
  it('merging first tree with null second tree returns first tree', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    root.left = left;
    root.right = right;
    expect(mergeTrees(root, null)).toEqual(root);
  });

  it('merging second tree with null first tree returns second tree', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    root.left = left;
    root.right = right;
    expect(mergeTrees(null, root)).toEqual(root);
  });

  it('merging identical trees returns double the vals', function() {
    var root = new TreeNode(1);
    var left = new TreeNode(2);
    var right = new TreeNode(3);
    root.left = left;
    root.right = right;

    var mergedTrees = mergeTrees(root, root);

    expect(mergedTrees.val).toEqual(2);
    expect(mergedTrees.left.val).toEqual(4);
    expect(mergedTrees.right.val).toEqual(6);
  });

  it('merging complimentary trees', function() {
    var root1 = new TreeNode(1);
    var left = new TreeNode(2);

    var root2 = new TreeNode(3);
    var right = new TreeNode(4);

    root1.left = left;
    root2.right = right;

    var mergedTrees = mergeTrees(root1, root2);

    expect(mergedTrees.val).toEqual(4);
    expect(mergedTrees.left.val).toEqual(2);
    expect(mergedTrees.right.val).toEqual(4);
  });
});
