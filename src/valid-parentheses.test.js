var isValid = require('./valid-parentheses');

describe('#isValid', function() {
  it('is invalid parentheses for single open parentheses', function() {
    expect(isValid('(')).toBe(false);
  });

  it('is invalid parentheses for single closed parentheses', function() {
    expect(isValid(')')).toBe(false);
  });

  it('is valid parentheses for single pair', function() {
    expect(isValid('()')).toBe(true);
  });

  it('is valid parentheses for multiple non-nested pairs in a row', function() {
    expect(isValid('(){}[]')).toBe(true);
  });

  it('is valid parenthese for nested pairs', function() {
    expect(isValid('({})')).toBe(true);
  });

  it('is not valid parentheses for invalid nested pairs', function() {
    expect(isValid('({))')).toBe(false);
  });

  it('is valid for empty string', function() {
    expect(isValid('')).toBe(true);
  })
});
