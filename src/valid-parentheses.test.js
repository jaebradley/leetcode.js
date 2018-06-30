var isValid = require('./valid-parentheses');

describe('#isValid', () => {
  it('is invalid parentheses for single open parentheses', () => {
    expect(isValid('(')).toBe(false);
  });

  it('is invalid parentheses for single closed parentheses', () => {
    expect(isValid(')')).toBe(false);
  });

  it('is valid parentheses for single pair', () => {
    expect(isValid('()')).toBe(true);
  });

  it('is valid parentheses for multiple non-nested pairs in a row', () => {
    expect(isValid('(){}[]')).toBe(true);
  });

  it('is valid parenthese for nested pairs', () => {
    expect(isValid('({})')).toBe(true);
  });

  it('is not valid parentheses for invalid nested pairs', () => {
    expect(isValid('({))')).toBe(false);
  });

  it('is valid for empty string', () => {
    expect(isValid('')).toBe(true);
  })
});
