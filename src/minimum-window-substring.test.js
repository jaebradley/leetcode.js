var minWindow = require('./minimum-window-substring');

describe('minWindow', function() {
  describe('when out of order', function() {
    it('identifies window', function() {
      expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC');
    });
  });
});
