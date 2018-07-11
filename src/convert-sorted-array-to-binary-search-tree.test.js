var sortedArrayToBST = require('./convert-sorted-array-to-binary-search-tree');
var TreeNode = require('./TreeNode');

describe('sortedArrayToBST', function() {
  it('null for empty array', function() {
    expect(sortedArrayToBST([])).toBeNull();
  });

  it('single node for single element array', function() {
    expect(sortedArrayToBST([1])).toEqual(new TreeNode(1));
  });

  it('two nodes for two element array', function() {
    var expected = new TreeNode(2);
    expected.left = new TreeNode(1);
    expect(sortedArrayToBST([1, 2])).toEqual(expected);
  });

  it('left and right nodes for three element array', function() {
    var expected = new TreeNode(2);
    expected.left = new TreeNode(1);
    expected.right = new TreeNode(3);
    expect(sortedArrayToBST([1, 2, 3])).toEqual(expected);
  });

  it('more left than right, but still height-balanced', function() {
    var expected = new TreeNode(3);
    expected.left = new TreeNode(2);
    expected.left.left = new TreeNode(1);
    expected.right = new TreeNode(4);
    expect(sortedArrayToBST([1, 2, 3, 4])).toEqual(expected);
  });
});
