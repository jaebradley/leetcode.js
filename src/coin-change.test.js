var coinChange = require('./coin-change');

describe('coinChange', function() {
  it('returns -1', function() {
    expect(coinChange([2], 3)).toEqual(-1);
  });
  it('returns 3', function() {
    expect(coinChange([1, 2, 5], 11)).toEqual(3);
  });
});
