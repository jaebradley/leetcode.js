var exist = require('./word-search');

describe('exist', function() {
  it('single word exists', function() {
    var board = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ];
    var word = 'adefi';
    expect(exist(board, word)).toBe(true);
  });
});
