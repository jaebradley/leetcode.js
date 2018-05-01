/**
https://leetcode.com/problems/linked-list-cycle/description/

* algorithms
* Easy (35.07%)
* Total Accepted:    251.1K
* Total Submissions: 716.8K


Given a linked list, determine if it has a cycle in it.



Follow up:
Can you solve it without using extra space?
 */

var hasCycle = function(head) {
  var first = head;
  var second = head;

  while (second != null && second.next != null) {
    first = first.next;
    second = second.next.next;
    if (first == second) {
      return true;
    }
  }

  return false;
};

module.exports = hasCycle;
