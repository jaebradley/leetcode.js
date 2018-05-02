var findUnsortedSubarray = require('./shortest-unsorted-continuous-subarray');

describe('findUnsortedSubarray', function() {
  it('0 for sorted array', function() {
    expect(findUnsortedSubarray([1, 2, 3, 4])).toEqual(0);
  });

  it('5 for [2, 6, 4, 8, 10, 9, 15]', function() {
    expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toEqual(5);
  });

  it('2 for [1, 3, 2, 4, 5]', function() {
    expect(findUnsortedSubarray([1, 3, 2, 4, 5])).toEqual(2);
  });

  it('4 for [1, 3, 2, 2, 2]', function() {
    expect(findUnsortedSubarray([1, 3, 2, 2, 2])).toEqual(4);
  });
});
