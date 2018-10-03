var threeSum = require('./3-sum');

describe('threeSum', function() {
  describe('when no sum exists', function() {
    it('returns empty array', function() {
      expect(threeSum([1, 2, 3, 4, 5, 6])).toEqual([]);
    });
  });

  describe('when single sum exists', function() {
    it('returns single array of arrays', function() {
      expect(threeSum([1, 2, 3, 4, 5, -9, 0])).toEqual([[-9, 4, 5]]);
    });
  });

  describe('when duplicate combination exists', function() {
    it('returns single array of arrays', function() {
      expect(threeSum([1, 2, -3, 100, -3, 1000])).toEqual([[-3, 1, 2]]);
    });
  });

  describe('when two different combinations exist', function() {
    it('returns both array of arrays', function() {
      expect(threeSum([1, 2, -3, 2, -4])).toEqual([
        [ -3, 1, 2 ],
        [ -4, 2, 2 ],
      ]);
    });
  });
});
