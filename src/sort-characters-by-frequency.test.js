var frequencySort = require('./sort-characters-by-frequency');

describe('frequencySort', function() {
  describe('one character string', function() {
    it('sorts single character', function() {
      expect(frequencySort('a')).toEqual('a');
    });
  });

  describe('two character string', function() {
    describe('when both characters have same frequency', function() {
      it('sorts characters', function() {
        expect(frequencySort('ab')).toEqual('ab');
      });
    });

    describe('when second character has a greater frequency', function() {
      it('returns string with second character first', function() {
        expect(frequencySort('abb')).toEqual('bba');
      });
    });

    describe('when first character has greater frequency', function() {
      it('returns string with first character first and second character second', function() {
        expect(frequencySort('aab')).toEqual('aab');
      });
    });
  });

  describe('three character string', function() {
    describe('two characters have same frequency and one has greater frequency', function() {
      it('returns string with character with greater frequency first and then remaining characters', function() {
        expect(frequencySort('Aabb')).toEqual('bbAa');
      })
    })
  });

  describe('four character string', function() {
    describe('when each character has different frequency', function() {
      it('returns characters in order', function() {
        expect(frequencySort('raaeaedere')).toEqual('eeeeaaarrd');
      });
    })
  });
});
