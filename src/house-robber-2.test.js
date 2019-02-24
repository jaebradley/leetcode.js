var rob = require('./house-robber-2');

describe('rob', function() {
  describe('when no numbers', function() {
    it('is 0', function() {
      expect(rob()).toBe(0);
    });
  });

  describe('when one number', function() {
    it('is that number', function() {
      expect(rob([10])).toBe(10);
    });
  });

  describe('when two numbers', function() {
    it('is greater of two numbers', function() {
      expect(rob([10, 11])).toBe(11);
    });
  });

  describe('when three numbers', function() {
    describe('when first number is greatest', function() {
      it('is first number', function() {
        expect(rob([12, 11, 10])).toBe(12);
      });
    });

    describe('when second number is greatest', function() {
      it('is second number', function() {
        expect(rob([11, 12, 10])).toBe(12);
      });
    });

    describe('when third number is greatest', function() {
      it('is third number', function() {
        expect(rob([10, 11, 12])).toBe(12);
      });
    });
  });

  describe('when four numbers', function() {
    describe('when first and third are greater', function() {
      it('is sum of first and third values', function() {
        expect(rob([1, 2, 3, 1])).toBe(4);
      });
    });
  });
});
