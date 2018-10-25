var searchMatrix = require('./search-a-2d-matrix');

describe('searchMatrix', function() {
  describe('when matrix has a single row', function() {
    var matrix = [
      [1, 2, 3, 4],
    ];
    it('finds first element', function() {
      expect(searchMatrix(matrix, 1)).toBe(true);
    });

    it('finds last element', function() {
      expect(searchMatrix(matrix, 4)).toBe(true);
    });

    it('does not find non-existent element', function() {
      expect(searchMatrix(matrix, 5)).toBe(false);
    });
  })
})
