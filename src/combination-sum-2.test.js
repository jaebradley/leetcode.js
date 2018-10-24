var combinationSum2 = require('./combination-sum-2');

describe('combinationSum2', function() {
  describe('test', function() {
    it('identifies', function() {
      var expected = [
        [1, 2, 2],
        [5],
      ];
      expect(combinationSum2([2, 5, 2, 1, 2], 5)).toEqual(expected);
    });

    it('identifies again', function() {
      var expected = [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ];
      expect(combinationSum2([10,1,2,7,6,1,5], 8)).toEqual(expected);
    });
  });
});
