/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
  var currentNode = head,
      count = 0,
      nextNode;

  // Iterate through linked list and increment count
  // to see if k can be reached
  while (!!currentNode && count < k) {
    currentNode = currentNode.next;
    count += 1;
  }

  // If k nodes are found
  // reverse k + 1 nodes
  if (count === k) {
    currentNode = reverseKGroup(currentNode, k);

    // k + 1 nodes are all reversed but head to k nodes are not
    // To reverse these nodes
    // Put current "head" at end of in-order nodes by using currentNode
    // currentNode is set as the start node of k + 1 reversed nodes
    // By using currentNode as head.next
    // and then reassigning currentNode to head
    // and then reassigning head as the next node after head
    // Iterate through ordered part of linked list
    // putting each successive node at "back" of linked list
    while (count > 0) {
      nextNode = head.next;
      head.next = currentNode;
      currentNode = head;
      head = nextNode;

      count -= 1;
    }

    head = currentNode;
  }

  return head;
};

module.exports = reverseKGroup;
