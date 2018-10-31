var searchMatrix = require('./search-a-2d-matrix');

describe('searchMatrix', function() {
  describe('when matrix is empty', function() {
    it('returns false', function() {
      expect(searchMatrix([], 0)).toBe(false);
    });
  });

  describe('when contains an empty row', function() {
    it('returns false', function() {
      expect(searchMatrix([[]], 0)).toBe(false);
    });
  });

  describe('when matrix has a single row', function() {
    var matrix = [
      [1, 2, 3, 4],
    ];

    it('finds every element in row', function() {
      var i,
          row;

      row = matrix[0];

      for (i = 0; i < row.length; i += 1) {
        expect(searchMatrix(matrix, row[i])).toBe(true);
      }
    });

    it('finds last element', function() {
      expect(searchMatrix(matrix, 4)).toBe(true);
    });

    it('does not find non-existent element', function() {
      expect(searchMatrix(matrix, 5)).toBe(false);
    });
  });

  describe('when matrix has two rows', function() {
    var matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];

    it('finds first element of second row', function() {
      var i,
          j,
          row;

      row = matrix[0];

      for (i = 0; i < matrix.length; i += 1) {
        row = matrix[i];

        for (j = 0; j < row.length; j += 1) {
          expect(searchMatrix(matrix, row[i])).toBe(true);
        }
      }
    });

    it('does not find non-existent element', function() {
      expect(searchMatrix(matrix, -1)).toBe(false);
    });
  })
})
