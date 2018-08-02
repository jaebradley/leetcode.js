var spiralOrder = require('./spiral-matrix');

describe('#spiralMatrix', function() {
  it('orders values for empty matrix', function() {
    var matrix = [[]];
    var expected = [];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 1x1', function() {
    var matrix = [[1]];
    var expected = [1];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 1x2', function() {
    var matrix = [[1, 2]];
    var expected = [1, 2];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 1x3', function() {
    var matrix = [[1, 2, 3]];
    var expected = [1, 2, 3];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 2x1', function() {
    var matrix = [[1], [2]];
    var expected = [1, 2];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 3x1', function() {
    var matrix = [[1], [2], [3]];
    var expected = [1, 2, 3];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders value for 2x2', function() {
    var matrix = [[1, 2], [3, 4]];
    var expected = [1, 2, 4, 3];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 3x3', function() {
    var matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    var expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];

    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 4x4', function() {
    var matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    var expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 3x4', function() {
    var matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    var expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
    expect(spiralOrder(matrix)).toEqual(expected);
  });

  it('orders values for 4x3', function() {
    var matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    var expected = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];
    expect(spiralOrder(matrix)).toEqual(expected);
  });
});
