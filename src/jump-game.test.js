var canJump = require('./jump-game');

describe('canJump', () => {
  it('false when first element is 0', () => {
    expect(canJump([0, 1, 2, 3, 4])).toBe(false);
  });

  it('true when can reacth last index', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });
});
