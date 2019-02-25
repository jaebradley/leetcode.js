var minimumTotal = require('./triangle');

describe('minimum total', function() {
  describe('when no rows', function() {
    it('is 0', function() {
      expect(minimumTotal([])).toBe(0);
    });
  });

  describe('when single row', function() {
    it('minimum total is single value in row', function() {
      expect(minimumTotal([[10]])).toBe(10);
    });
  });

  describe('when two rows', function() {
    it('minimum total is smallest of second row options and first row value', function() {
      expect(minimumTotal([[10], [1, 2]])).toBe(11);
    });
  });

  describe('when three rows', function() {
    describe('when minimum value in last row is not part of path', function() {
      it('returns minimum total', function() {
        expect(minimumTotal([
          [10],
          [11, 1],
          [5, 6, 7],
        ])).toBe(17);
      });
    });
  });

  describe('when four rows', function() {
    it('gets minimum path', function() {
      expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
    });
  });
});
