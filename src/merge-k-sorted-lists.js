
/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
 */

var ListNode = require('./ListNode');

var MinHeap = function() {
  var values = [null];

  function getParentIndex(childIndex) {
    return Math.floor(childIndex / 2);
  }

  function getChildIndices(parentIndex) {
    var leftChild = parentIndex * 2;

    return {
      leftChild: leftChild,
      rightChild: leftChild + 1,
    };
  }

  function swap(firstIndex, secondIndex) {
    var firstValue = values[firstIndex],
        secondValue = values[secondIndex];

    values[firstIndex] = secondValue;
    values[secondIndex] = firstValue;
  }

  function getSmallestNode(firstIndex, secondIndex) {
    var firstValue = values[firstIndex];
    var secondValue = values[secondIndex];

    if (secondValue && firstValue.value > secondValue.value) {
      return {
        value: secondValue,
        index: secondIndex,
      }
    }

    return {
      value: firstValue,
      index: firstIndex,
    }
  }

  function add(value) {
    var valueIndex,
        parentIndex,
        parentValue;

    values.push(value);

    valueIndex = getSize();
    parentIndex = getParentIndex(valueIndex);
    parentValue = values[parentIndex];

    while (parentIndex >= 1 && parentValue.value > value.value) {
      swap(parentIndex, valueIndex);

      valueIndex = parentIndex;
      parentIndex = getParentIndex(valueIndex);
      parentValue = values[parentIndex];
    }
  }

  function remove() {
    var firstValue = values[1],
        lastValueIndex = values.length - 1,
        lastValue = values[lastValueIndex];

    values.splice(lastValueIndex, 1);

    if (getSize() > 0) {
      values[1] = lastValue;
      lastValueIndex = 1;

      var childIndices = getChildIndices(lastValueIndex);
      var smallestNode = getSmallestNode(childIndices.leftChild, childIndices.rightChild);

      while (smallestNode && smallestNode.value && lastValue.value > smallestNode.value.value) {
        swap(lastValueIndex, smallestNode.index);
        lastValueIndex = smallestNode.index;

        var childIndices = getChildIndices(lastValueIndex);
        smallestNode = getSmallestNode(childIndices.leftChild, childIndices.rightChild);
      }
    }

    return firstValue;
  }

  function getFirst() {
    return values[1];
  }

  function getSize() {
    return values.length - 1;
  }

  function isEmpty() {
    return getSize() === 0;
  }

  return {
    add: add,
    remove: remove,
    getFirst: getFirst,
    getSize: getSize,
    isEmpty: isEmpty,
  };
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.value = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  var heap = MinHeap(),
      i,
      minimumValue,
      previouslyMergedValue,
      start = null;

  for (i = 0; i < lists.length; i += 1) {
    if (lists[i]) {
      heap.add(lists[i]);
    }
  }

  while (!heap.isEmpty()) {
    minimumValue = heap.remove();

    if (minimumValue) {
      if (minimumValue.next) {
        heap.add(minimumValue.next);
      }

      if (previouslyMergedValue) {
        previouslyMergedValue.next = minimumValue;
        previouslyMergedValue = minimumValue;
      } else {
        start = minimumValue;
        previouslyMergedValue = minimumValue;
      }
    }
  }

  return start;
};

module.exports = mergeKLists;
