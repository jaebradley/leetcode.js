var countSubstrings = require('./palindromic-substrings');

describe('countSubstrings', function() {
  it('three for abc', function() {
    expect(countSubstrings('abc')).toEqual(3);
  });

  it('five for aaa', function() {
    expect(countSubstrings('aaa')).toEqual(6);
  });

  it('three for aa', function() {
    expect(countSubstrings('aa')).toEqual(3);
  });

  it('one for a', function() {
    expect(countSubstrings('a')).toEqual(1);
  });
});
