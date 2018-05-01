var twoSum = require('./two-sum');

describe('two sum', function() {
  it('should return [0, 1]', function() {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('should return [2, 3]', function() {
    expect(twoSum([11, 15, 2, 7], 9)).toEqual([2, 3]);
  });
});
