var numJewelsInStones = require('./jewels-and-stones');

describe('#numJewelsInStones', function() {
  describe('when stones are not in jewels', function() {
    it('is 0', function() {
      expect(numJewelsInStones('Z', 'z')).toBe(0);
    });
  });

  describe('when stones are in jewels', function() {
    it('is count of stones', function() {
      expect(numJewelsInStones('Z', 'Z')).toBe(1);
    });
  });
});
