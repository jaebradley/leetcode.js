var maxProfit = require('./best-time-to-buy-and-sell-stock');

describe('#maxProfit', function() {
  describe('when monotonically decreasing', function() {
    it('is 0', function() {
      expect(maxProfit([5, 4, 3, 2, 1])).toEqual(0);
    });
  });

  describe('when largest profit occurs multiple days after buying', function() {
    it('is 5', function() {
      expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
    });
  });

  describe('when target profit occurs next day after buying', function() {
    it('is 9', function() {
      expect(maxProfit([1, 10, 1, 1, 1])).toEqual(9);
    });
  });

  describe('when max profit occurs at end of values', function() {
    it('is 10', function() {
      expect(maxProfit([1, 1, 1, 1, 10])).toEqual(9);
    });
  });
});
