var ListNode = require('./ListNode');
var mergeKSortedLists = require('./merge-k-sorted-lists');

describe('#mergeKLists', function() {
  describe('when only one list is specified', function() {
    describe('when lists are not empty', function() {
      it('values are in order', function() {
        var root = new ListNode(1);
        root.next = new ListNode(2);
        root.next.next = new ListNode(3);
        root.next.next.next = new ListNode(4);

        var mergedLists = mergeKSortedLists([root]);
        expect(mergedLists.value).toBe(1);
        expect(mergedLists.next.value).toBe(2);
        expect(mergedLists.next.next.value).toBe(3);
        expect(mergedLists.next.next.next.value).toBe(4);
        expect(mergedLists.next.next.next.next).toBeNull();
      });
    });

    describe('when lists are empty', function() {
      it('returns null', function() {
        var mergedLists = mergeKSortedLists([null]);
        expect(mergedLists).toBeNull();
      });
    });
  });

  describe('when three lists are specified', function() {
    it('values are in order', function() {
      var firstRoot = new ListNode(1);
      firstRoot.next = new ListNode(4);
      firstRoot.next.next = new ListNode(5);

      var secondRoot = new ListNode(1);
      secondRoot.next = new ListNode(3);
      secondRoot.next.next = new ListNode(4);

      var thirdRoot = new ListNode(2);
      thirdRoot.next = new ListNode(6);

      var mergedLists = mergeKSortedLists([firstRoot, secondRoot, thirdRoot]);
      expect(mergedLists.value).toBe(1);
      expect(mergedLists.next.value).toBe(1);
      expect(mergedLists.next.next.value).toBe(2);
      expect(mergedLists.next.next.next.value).toBe(3);
      expect(mergedLists.next.next.next.next.value).toBe(4);
      expect(mergedLists.next.next.next.next.next.value).toBe(4);
      expect(mergedLists.next.next.next.next.next.next.value).toBe(5);
      expect(mergedLists.next.next.next.next.next.next.next.value).toBe(6);
      expect(mergedLists.next.next.next.next.next.next.next.next).toBeNull();
    });
  });
});
