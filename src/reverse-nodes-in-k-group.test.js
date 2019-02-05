var reverseKGroup = require('./reverse-nodes-in-k-group');
var ListNode = require('./ListNode');

describe('reverseKGroup', function() {
  describe('when empty list', function() {
    it('is null', function() {
      var list = null;
      reverseKGroup(list, 2);
      expect(list).toBeNull();
    });
  });

  describe('when single value list', function() {
    it('is value', function() {
      var list = new ListNode(10);
      reverseKGroup(list, 10);
      expect(list).toBeDefined();
      expect(list.value).toBe(10);
      expect(list.next).toBeNull();
    });
  });

  describe('when multi-value list', function() {
    describe('when k is 1', function() {
      it('keeps nodes in order', function() {
        var list = new ListNode(1);
        list.next = new ListNode(2);
        list.next.next = new ListNode(3);
        list.next.next.next = new ListNode(4);
        var reversedList = reverseKGroup(list, 1);
        expect(reversedList.value).toBe(1);
        expect(reversedList.next.value).toBe(2);
        expect(reversedList.next.next.value).toBe(3);
        expect(reversedList.next.next.next.value).toBe(4);
      });
    });

    describe('when k is 2', function() {
      describe('when list has two values', function() {
        it('reverses nodes', function() {
          var list = new ListNode(1);
          list.next = new ListNode(2);
          var reversed = reverseKGroup(list, 2);
          expect(reversed.value).toBe(2);
          expect(reversed.next.value).toBe(1);
        });
      });

      describe('when list has three values', function() {
        it('reverses first two nodes but does not change order of third node', function() {
          var list = new ListNode(1);
          list.next = new ListNode(2);
          list.next.next = new ListNode(3);
          var reversed = reverseKGroup(list, 2);
          expect(reversed.value).toBe(2);
          expect(reversed.next.value).toBe(1);
          expect(reversed.next.next.value).toBe(3);
        });
      });

      describe('when list has four values', function() {
        it('reverses first two nodes, then reverses the next two nodes', function() {
          var list = new ListNode(1);
          list.next = new ListNode(2);
          list.next.next = new ListNode(3);
          list.next.next.next = new ListNode(4);
          var reversed = reverseKGroup(list, 2);
          expect(reversed.value).toBe(2);
          expect(reversed.next.value).toBe(1);
          expect(reversed.next.next.value).toBe(4);
          expect(reversed.next.next.next.value).toBe(3);
        });
      });
    });
  });
});
