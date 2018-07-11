var canJump = require('./jump-game');

describe('canJump', function() {
  it('false when first element is 0', function() {
    expect(canJump([0, 1, 2, 3, 4])).toBe(false);
  });

  it('true when can reach last index', function() {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });
});
