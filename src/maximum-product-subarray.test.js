var maxProduct = require('./maximum-product-subarray');

describe('maxProduct', function() {
  describe('when nums is not defined', function() {
    it('is 0', function() {
      expect(maxProduct(null)).toBe(0);
    });
  });

  describe('when nums is empty', function() {
    it('is 0', function() {
      expect(maxProduct([])).toBe(0);
    });
  });

  describe('when single value', function() {
    it('is single value', function() {
      expect(maxProduct([-10])).toBe(-10);
    });
  });

  describe('when two values', function() {
    describe('when both values are negative', function() {
      it('is product of both values', function() {
        expect(maxProduct([-10, -9])).toBe(90);
      });
    });

    describe('when one value is positive and the other is negative', function() {
      it('is positive value', function() {
        expect(maxProduct([-10, 9])).toBe(9);
      });
    });

    describe('when one value is negative and one value is 0', function() {
      it('is 0', function() {
        expect(maxProduct([-10, 0])).toBe(0);
      });
    });

    describe('when one value is positive and one value is 0', function() {
      it('is positive value', function() {
        expect(maxProduct([10, 0])).toBe(10);
      });
    });
  });

  describe('when three values', function() {
    describe('when first and last values are negative', function() {
      it('is product of all three values', function() {
        expect(maxProduct([-10, 8, -9])).toBe(720);
      });
    });

    describe('when only last value is negative', function() {
      it('is product of first two values', function() {
        expect(maxProduct([10, 9, -8])).toBe(90);
      });
    });

    describe('when only first value is negative', function() {
      it('is product of last two values', function() {
        expect(maxProduct([-8, 10, 9])).toBe(90);
      });
    });
  });
});
