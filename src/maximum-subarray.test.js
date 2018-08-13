var maxSubArray = require('./maximum-subarray');

describe('maxSubArray', function() {
  it('returns 6', function() {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it('returns 15', function() {
    expect(maxSubArray([1, 2, 3, 4, 5])).toEqual(15);
  });

  it('returns -1', function() {
    expect(maxSubArray([-1, -2, -3, -4, -5])).toEqual(-1);
  });

  it('returns -1', function() {
    expect(maxSubArray([-1])).toEqual(-1);
  });
});
