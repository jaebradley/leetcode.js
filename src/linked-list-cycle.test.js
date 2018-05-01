var hasCycle = require('./linked-list-cycle');
var ListNode = require('./ListNode');

describe('hasCycle', function() {
  it('true for linked list with a cycle', function() {
    var head = new ListNode(1);
    var first = new ListNode(2);
    var second = new ListNode(3);
    var third = new ListNode(4);
    var tail = new ListNode(5);
    head.next = first;
    first.next = second;
    second.next = third;
    third.next = tail;
    tail.next = first;
    expect(hasCycle(head)).toBe(true);
  });

  it('false for linked list without a cycle', function() {
    var head = new ListNode(1);
    var first = new ListNode(2);
    var second = new ListNode(3);
    var third = new ListNode(4);
    var tail = new ListNode(5);
    head.next = first;
    first.next = second;
    second.next = third;
    third.next = tail;
    expect(hasCycle(head)).toBe(false);
  });
});
