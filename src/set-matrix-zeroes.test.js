var setZeroes = require('./set-matrix-zeroes');

describe('#setZeroes', function() {
  describe('2 by 2', function() {
    describe('when zero is not in first row', function() {
      it('replaces zeroes', function() {
        var matrix = [
          [1, 2],
          [3, 0],
        ];
        var expected = [
          [1, 0],
          [0, 0],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
      });
    });

    describe('when zero is in first row', function() {
      it('replaces zeroes', function() {
        var matrix = [
          [1, 0],
          [3, 4],
        ];
        var expected = [
          [0, 0],
          [3, 0],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
      });
    });

    describe('when zero is in first column', function() {
      it('replaces zeroes', function() {
        var matrix = [
          [1, 2],
          [0, 4],
        ];
        var expected = [
          [0, 2],
          [0, 0],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
      });
    });

    describe('when zero is in first column and first row', function() {
      it('replaces zeroes', function() {
        var matrix = [
          [0, 2],
          [1, 4],
        ];
        var expected = [
          [0, 0],
          [0, 4],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
      });
    });
  });
})
