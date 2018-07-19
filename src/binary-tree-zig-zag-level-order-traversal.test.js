var zigzagLevelOrder = require('./binary-tree-zig-zag-level-order-traversal');
var TreeNode = require('./TreeNode');

describe('zigzagLevelOrder', function() {
  it('empty array for empty tree', function() {
    expect(zigzagLevelOrder(null)).toEqual([]);
  });

  it('single element array for single element tree', function() {
    expect(zigzagLevelOrder(new TreeNode(1))).toEqual([[1]]);
  });

  it('left root child', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    var expected = [
      [1],
      [2],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('right root child', function() {
    var root = new TreeNode(1);
    root.right = new TreeNode(2);
    var expected = [
      [1],
      [2],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('both children', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    var expected = [
      [1],
      [3, 2],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('left root children only, two levels', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    var expected = [
      [1],
      [3, 2],
      [4, 5],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('right root children only, two levels', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    var expected = [
      [1],
      [3, 2],
      [4, 5],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('all root children only, two levels', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    var expected = [
      [1],
      [3, 2],
      [4, 5, 6, 7],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('each leaf has one, two levels', function() {
    var root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    var expected = [
      [1],
      [3, 2],
      [4, 5],
    ];
    expect(zigzagLevelOrder(root)).toEqual(expected);
  });
});
