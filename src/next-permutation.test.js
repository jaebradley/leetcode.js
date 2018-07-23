var nextPermutation = require('./next-permutation');

describe('nextPermutation', function() {
  it('1, 2, 3, 4 => 1, 2, 4, 3', function() {
    var values = [1, 2, 3, 4];
    var expected = [1, 2, 4, 3];
    nextPermutation(values);
    expect(values).toEqual(expected);
  });

  it('1, 2, 4, 3 => 1, 3, 2, 4', function() {
    var values = [1, 2, 4, 3];
    var expected = [1, 3, 2, 4];
    nextPermutation(values);
    expect(values).toEqual(expected);
  });

  it('4, 3, 2, 1 => 1, 2, 3, 4', function() {
    var values = [4, 3, 2, 1];
    var expected = [1, 2, 3, 4];
    nextPermutation(values);
    expect(values).toEqual(expected);
  });

  it('2, 3, 1 => 3, 1, 2', function() {
    var values = [2, 3, 1];
    var expected = [3, 1, 2];
    nextPermutation(values);
    expect(values).toEqual(expected);
  });

  it('5, 1, 1 => 5, 1, 1', function() {
    var values = [5, 1, 1];
    var expected = [1, 1, 5];
    nextPermutation(values);
    expect(values).toEqual(expected);
  });

  it('[2,3,1,3,3] => [2,3,3,1,3]', function() {
    var values = [2, 3, 1, 3, 3];
    var expected = [2, 3, 3, 1, 3];
    nextPermutation(values);
    expect(values).toEqual(expected);
  });
});
