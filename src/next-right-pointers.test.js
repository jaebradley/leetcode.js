var connect = require('./next-right-pointers');
var TreeLinkNode = require('./TreeLinkNode');

describe('connect', function() {
  it('connects single element tree with null', function() {
    var tree = new TreeLinkNode(1);
    connect(tree);
    expect(tree.val).toEqual(1);
    expect(tree.left).toBeNull();
    expect(tree.right).toBeNull();
    expect(tree.next).toBeNull();
  });

  it('connects two level tree', function() {
    var tree = new TreeLinkNode(1);
    var left = new TreeLinkNode(2);
    var right = new TreeLinkNode(3);
    tree.left = left;
    tree.right = right;

    connect(tree);

    expect(tree.next).toBeNull();
    expect(left.next).toEqual(right);
    expect(right.next).toBeNull();
  });

  it('connects three level tree', function() {
    var tree = new TreeLinkNode(1);
    var left = new TreeLinkNode(2);
    var right = new TreeLinkNode(3);
    var leftLeft = new TreeLinkNode(4);
    var leftRight = new TreeLinkNode(5);
    var rightLeft = new TreeLinkNode(6);
    var rightRight = new TreeLinkNode(7);

    tree.left = left;
    tree.right = right;

    left.left = leftLeft;
    left.right = leftRight;
    right.left = rightLeft;
    right.right = rightRight;

    connect(tree);

    expect(tree.next).toBeNull();
    expect(left.next).toEqual(right);
    expect(right.next).toBeNull();
    expect(leftLeft.next).toEqual(leftRight);
    expect(leftRight.next).toEqual(rightLeft);
    expect(rightLeft.next).toEqual(rightRight);
    expect(rightRight.next).toBeNull();
  });
});
