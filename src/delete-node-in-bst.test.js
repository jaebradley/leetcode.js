var deleteNode = require('./delete-node-in-bst');
var TreeNode = require('./TreeNode');

describe('deleteNode', function() {
  describe('when root is null', function() {
    it('returns null', function() {
      expect(deleteNode(null, 10)).toBeNull();
    });
  });

  describe('when root matches', function() {
    var root;

    beforeEach(function() {
      root = new TreeNode(5);
    });

    describe('when root does not have children', function() {
      it('returns null', function() {
        expect(deleteNode(root, 5)).toBeNull();
      });
    });

    describe('when root has left child', function() {
      beforeEach(function() {
        root.left = new TreeNode(1);
      });

      it('returns left child', function() {
        root = deleteNode(root, 5);

        expect(root.val).toBe(1);
        expect(root.left).toBeNull();
        expect(root.right).toBeNull();
      });
    });

    describe('when root has right child', function() {
      beforeEach(function() {
        root.right = new TreeNode(10);
      });

      it('returns left child', function() {
        root = deleteNode(root, 5);

        expect(root.val).toBe(10);
        expect(root.left).toBeNull();
        expect(root.right).toBeNull();
      });
    });

    describe('when root has left and right children', function() {
      beforeEach(function() {
        root.left = new TreeNode(1);
        root.right = new TreeNode(10);
      });

      it('returns right child', function() {
        root = deleteNode(root, 5);

        expect(root.val).toBe(10);
        expect(root.left.val).toBe(1);
        expect(root.right).toBeNull();
      });
    });
  });

  describe('when root has left child', function() {
    var root;

    beforeEach(function() {
      root = new TreeNode(10);
      root.left = new TreeNode(5);
    });

    describe('when left child matches', function() {
      it('returns tree without left child', function() {
        root = deleteNode(root, 5);

        expect(root).toBeDefined();
        expect(root.val).toBe(10);
        expect(root.left).toBeNull();
      });
    });

    describe('when left child does not match', function() {
      it('returns unchanged tree', function() {
        root = deleteNode(root, 20);

        expect(root).toBeDefined();
        expect(root.val).toBe(10);
        expect(root.left).toBeDefined();
        expect(root.left.val).toBe(5);
      });
    });
  });

  describe('when root has right child', function() {
    var root;

    beforeEach(function() {
      root = new TreeNode(10);
      root.right = new TreeNode(15);
    });

    describe('when right child matches', function() {
      it('returns tree without right child', function() {
        root = deleteNode(root, 15);

        expect(root).toBeDefined();
        expect(root.val).toBe(10);
        expect(root.right).toBeNull();
      });
    });

    describe('when right child does not match', function() {
      it('returns unchanged tree', function() {
        root = deleteNode(root, 20);

        expect(root).toBeDefined();
        expect(root.val).toBe(10);
        expect(root.right).toBeDefined();
        expect(root.right.val).toBe(15);
      });
    });
  });
});
