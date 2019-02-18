/**
 * Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

function MaxHeap() {
  var values = [null];

  function getParentIndex(childIndex) {
    return Math.floor(childIndex / 2);
  }

  function getChildIndices(parentIndex) {
    return {
      left: parentIndex * 2,
      right: parentIndex * 2 + 1,
    }
  }

  function swap(fromIndex, toIndex) {
    var fromValue = values[fromIndex];
    values[fromIndex] = values[toIndex];
    values[toIndex] = fromValue;
  }

  function getSize() {
    return values.length - 1;
  }

  function isEmpty() {
    return getSize() === 0;
  }

  function push(value) {
    values.push(value);

    var valueIndex = getSize();
    var parentIndex = getParentIndex(valueIndex);
    var parentValue = values[parentIndex];

    while (parentValue != null && parentValue.count < value.count) {
      swap(valueIndex, parentIndex);
      valueIndex = parentIndex;
      parentIndex = getParentIndex(valueIndex);
      parentValue = values[parentIndex];
    }
  }

  function pop() {
    var lastValue = values.pop();
    var rootValue = lastValue;

    if (!isEmpty()) {
      rootValue = values.splice(1, 1, lastValue)[0];

      var lastValueIndex = 1;

      var childIndices = getChildIndices(lastValueIndex);
      var leftIndex = childIndices.left;
      var rightIndex = childIndices.right;
      var leftValue = values[leftIndex];
      var rightValue = values[rightIndex];
      var leftCount = (leftValue && leftValue.count) || 0;
      var rightCount = (rightValue && rightValue.count) || 0;

      while (leftCount > lastValue.count || rightCount > lastValue.count) {
        if (leftCount > rightCount) {
          swap(lastValueIndex, leftIndex);
          lastValueIndex = leftIndex;
        } else {
          swap(lastValueIndex, rightIndex);
          lastValueIndex = rightIndex;
        }

        childIndices = getChildIndices(lastValueIndex);
        leftIndex = childIndices.left;
        rightIndex = childIndices.right;
        leftValue = values[leftIndex];
        rightValue = values[rightIndex];
        leftCount = (leftValue && leftValue.count) || 0;
        rightCount = (rightValue && rightValue.count) || 0;
      }
    }

    return rootValue;
  }

  return {
    getSize: getSize,
    isEmpty: isEmpty,
    push: push,
    pop: pop,
  }
}

var frequencySort = function(s) {
  var frequencies = {},
      i,
      character,
      frequency,
      keys,
      heap = MaxHeap(),
      key,
      value,
      sortedCharacters = '',
      characterCounts;

  for (i = 0; i < s.length; i += 1) {
    character = s[i];
    frequency = frequencies[character];

    if (frequency) {
      frequencies[character] += 1;
    } else {
      frequencies[character] = 1;
    }
  }

  keys = Object.keys(frequencies);
  heap = MaxHeap();
  for (i = 0; i < keys.length; i += 1) {
    key = keys[i];
    value = frequencies[key];

    heap.push({ count: value, character: key });
  }

  sortedCharacters = '';
  while (!heap.isEmpty()) {
    characterCounts = heap.pop();
    sortedCharacters += characterCounts.character.repeat(characterCounts.count);
  }
  return sortedCharacters;
};

module.exports = frequencySort;
