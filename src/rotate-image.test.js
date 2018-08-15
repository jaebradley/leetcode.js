var rotate = require('./rotate-image');

describe('#rotate', function() {
  it('rotates a 1x1', function() {
    var matrix = [[1]];
    var expected = [[1]];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  });

  it('rotates a 2x2', function() {
    var matrix = [
      [1, 2],
      [3, 4],
    ];
    var expected = [
      [3, 1],
      [4, 2],
    ];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  })

  it('rotates a 3x3', function() {
    var matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    var expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  });

  it('rotates a 4x4', function() {
    var matrix = [
      [ 5, 1, 9,11],
      [ 2, 4, 8,10],
      [13, 3, 6, 7],
      [15,14,12,16]
    ];
    var expected = [
      [15,13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7,10,11]
    ];
    rotate(matrix);
    expect(matrix).toEqual(expected);
  });
});
