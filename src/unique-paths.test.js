var uniquePaths = require('./unique-paths');

describe('#uniquePaths', function() {
  it('is 28 for 7 x 3', function() {
    expect(uniquePaths(7, 3)).toEqual(28);
  });

  it('is 3 for 3 x 2', function() {
    expect(uniquePaths(3, 2)).toEqual(3);
  });

  it('is 2 for 2 x 2', function() {
    expect(uniquePaths(2, 2)).toEqual(2);
  });

  it('is 1 for 1 x 1', function() {
    expect(uniquePaths(1, 1)).toEqual(1);
  });

  it('is 1916797311 for 51 x 9', function() {
    expect(uniquePaths(51, 9)).toEqual(1916797311);
  });
});
