var maxArea = require('./container-with-most-water');

describe('Container with most water', function() {
  describe('when zero lines', function() {
    it('is zero', function() {
      expect(maxArea([])).toBe(0);
    });
  });

  describe('when one line', function() {
    it('is zero', function() {
      expect(maxArea([10])).toBe(0);
    });
  });

  describe('when two lines', function() {
    describe('when first value is 10 and second value is 5', function() {
      it('is 5', function() {
        expect(maxArea([10, 5])).toBe(5);
      });
    });

    describe('when first value is 5 and second value is 10', function() {
      it('is 5', function() {
        expect(maxArea([5, 10])).toBe(5);
      });
    });
  });

  describe('when three lines', function() {
    describe('when first value is 10, second value is 8, and third value is 5', function() {
      it('is 10', function() {
        expect(maxArea([10, 8, 5])).toBe(10);
      });
    });

    describe('when first value is 8, second value is 10, and third value is 5', function() {
      it('is 10', function() {
        expect(maxArea([8, 10, 5])).toBe(10);
      });
    });

    describe('when first value is 5, second value is 8, and third value is 10', function() {
      it('is 10', function() {
        expect(maxArea([5, 8, 10])).toBe(10);
      });
    });

    describe('when first value is 8, second value is 5, and third value is 10', function() {
      it('is 16', function() {
        expect(maxArea([8, 5, 10])).toBe(16);
      });
    });

    describe('when first value is 5, second value is 10, third value is 8', function() {
      it('is 10', function() {
        expect(maxArea([5, 10, 8])).toBe(10);
      });
    });

    describe('when first value is 10, second value is 5, and third value is 8', function() {
      it('is 16', function() {
        expect(maxArea([10, 5, 8])).toBe(16);
      });
    });
  });

  describe('when always increasing', function() {
    describe('when 1, 2, 3, 4, 5, 6', function() {
      it('is 9', function() {
        expect(maxArea([1, 2, 3, 4, 5, 6])).toBe(9);
      });
    });

  });
  describe('when always decreasing', function() {
    describe('when 6, 5, 4, 3, 2, 1', function() {
      it('is 9', function() {
        expect(maxArea([6, 5, 4, 3, 2, 1])).toBe(9);
      });
    });
  });
  describe('when increasing and then decreasing', function() {
    describe('when 1, 4, 6, 5, 3, 2', function() {
      it('is 9', function() {
        expect(maxArea([1, 4, 6, 5, 3, 2])).toBe(9);
      });
    });
  });
});
