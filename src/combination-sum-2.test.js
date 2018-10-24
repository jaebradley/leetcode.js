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

  describe('when no candidates', function() {
    it('empty result set', function() {
      expect(combinationSum2([], 1)).toEqual([]);
    });
  })

  describe('when candidates exist', function() {
    describe('when duplicate solutions exist', function() {
      it('returns unique result', function() {
        var expected = [
          [1, 1, 2]
        ];
        expect(combinationSum2([1, 1, 1, 2], 4)).toEqual(expected);
      });
    });

    describe('when duplicate solutions do not exist', function() {
      it('returns single result', function() {
        var expected = [
          [1, 1, 2]
        ];
        expect(combinationSum2([1, 1, 2], 4)).toEqual(expected);
      });
    });

    describe('when backtracking occurs', function() {
      it('returns single result', function() {
        var expected = [
          [1, 5]
        ];
        expect(combinationSum2([20, 1, 2, 5], 6)).toEqual(expected);
      });
    });
  })
});
