var combinationSum = require('./combination-sum');

describe('combinationSum', function() {
  it('finds two combinations for 7', function() {
    var expected = [
      [2, 2, 3],
      [7],
    ];
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual(expected);
  });
});
