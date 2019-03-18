var maxSlidingWindow = require('./sliding-window-maximum');

describe('maxSlidingWindow', function() {
  describe('when numbers are empty', function() {
    it('returns empty array', function() {
      expect(maxSlidingWindow([], 10)).toEqual([]);
    });
  });
  describe('when numbers are not empty', function() {
    describe('when sliding window size is greater than array length', function() {
      it('returns empty array', function() {
        expect(maxSlidingWindow([1, 2, 3, 4], 10)).toEqual([]);
      });
    });

    describe('when sliding window size is less than array length', function() {
      describe('when value at start of window is max', function() {
        it('returns max values', function() {
          expect(maxSlidingWindow([5, 4, 3, 2, 1], 2)).toEqual([5, 4, 3, 2]);
        });
      });

      describe('when value at end of window is max', function() {
        it('returns max values', function() {
          expect(maxSlidingWindow([1, 2, 3, 4, 5], 2)).toEqual([2, 3, 4, 5]);
        });
      });

      describe('when value in middle of window is max', function() {
        it('returns max values', function() {
          expect(maxSlidingWindow([1, 3, 1, 5, 2, 10, 3], 3)).toEqual([3, 5, 5, 10, 10]);
        });
      });
    });
  });
});
