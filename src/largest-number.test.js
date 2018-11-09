var largestNumber = require('./largest-number');

describe('largestNumber', function() {
  describe('when no values are empty', function() {
    it('is 0', function() {
      expect(largestNumber([])).toEqual('0');
    });
  });

  describe('when one value exists', function() {
    it('is value', function() {
      expect(largestNumber([1])).toEqual('1');
    });
  });

  describe('when two values exist', function() {
    describe('when both values are 0', function() {
      it('is 0', function() {
        expect(largestNumber([0, 0])).toEqual('0');
      });
    });

    describe('when combining first value with second value is less than the opposite', function() {
      describe('when values are large', function() {
        it('is second value concatenated with first value', function() {
          expect(largestNumber([999999997,999999998])).toEqual('999999998999999997');
        });
      });

      describe('when values are not large', function() {
        it('is second value concatenated with first value', function() {
          expect(largestNumber([1, 2])).toEqual('21');
        });
      });
    });

    describe('when combining first value with second value is greater than the opposite', function() {
      it('is first value concatenated with the second value', function() {
        expect(largestNumber([2, 1])).toEqual('21');
      });
    });
  });

  describe('many values', function() {
    it('is in order', function() {
      expect(largestNumber([41,23,87,55,50,53,18,9,39,63,35,33,54,25,26,49,74,61,32,81,97,99,38,96,22,95,35,57,80,80,16,22,17,13,89,11,75,98,57,81,69,8,10,85,13,49,66,94,80,25,13,85,55,12,87,50,28,96,80,43,10,24,88,52,16,92,61,28,26,78,28,28,16,1,56,31,47,85,27,30,85,2,30,51,84,50,3,14,97,9,91,90,63,90,92,89,76,76,67,55]))
      .toEqual('99999897979696959492929190908989888878785858585848181808080807876767574696766636361615757565555555453525150505049494743413938353533332313030282828282726262525242322222181716161614131313121111010');
    });
  });
});
