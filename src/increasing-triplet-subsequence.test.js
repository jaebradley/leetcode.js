var increasingTriplet = require('./increasing-triplet-subsequence');

describe('increasingTriplet', function() {
  describe('when no values', function() {
    it('is false', function() {
      expect(increasingTriplet([])).toBe(false);
    });
  });

  describe('when 1 value', function() {
    it('is false', function() {
      expect(increasingTriplet([1])).toBe(false);
    });
  });

  describe('when 2 values', function() {
    describe('when increasing', function() {
      it('is false', function() {
        expect(increasingTriplet([1, 2])).toBe(false);
      });
    });

    describe('when decreasing', function() {
      it('is false', function() {
        expect(increasingTriplet([2, 1])).toBe(false);
      });
    });
  });

  describe('when 3 values', function() {
    describe('when decreasing', function() {
      it('is false', function() {
        expect(increasingTriplet([3, 2, 1])).toBe(false);
      });
    });

    describe('when decrease, then increase', function() {
      it('is false', function() {
        expect(increasingTriplet([3, 1, 2])).toBe(false);
      });
    });

    describe('when increase, then decrease', function() {
      it('is false', function() {
        expect(increasingTriplet([1, 3, 2])).toBe(false);
      });
    });

    describe('when increasing', function() {
      it('is true', function() {
        expect(increasingTriplet([1, 2, 3])).toBe(true);
      });
    });
  });
});
