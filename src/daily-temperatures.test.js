var dailyTemperatures = require('./daily-temperatures');

describe('dailyTemperatures', function() {
  describe('when one temperature', function() {
    it('is [0]', function() {
      expect(dailyTemperatures([10])).toEqual([0]);
    });
  });
  describe('when two temperatures', function() {
    describe('when temperatures are increasing', function() {
      it('is [1, 0]', function() {
        expect(dailyTemperatures([10, 11])).toEqual([1, 0])
      });
    });

    describe('when temperatures are decreasing', function() {
      it('is [0, 0]', function() {
        expect(dailyTemperatures([11, 10])).toEqual([0, 0])
      });
    });

    describe('when three temperatures', function() {
      describe('when temperatures are strictly increasing', function() {
        it('is [1, 1, 0]', function() {
          expect(dailyTemperatures([10, 11, 12])).toEqual([1, 1, 0]);
        });
      });

      describe('when temperatures increase then decrease', function() {
        it('is [1, 1, 0]', function() {
          expect(dailyTemperatures([10, 12, 11])).toEqual([1, 0, 0]);
        });
      });

      describe('when temperatures decrease then increase', function() {
        it('is [2, 1, 0]', function() {
          expect(dailyTemperatures([11, 10, 12])).toEqual([2, 1, 0]);
        });
      });

      describe('when temperatures are strictly decreasing', function() {
        it('is [0, 0, 0]', function() {
          expect(dailyTemperatures([12, 11, 10])).toEqual([0, 0, 0]);
        });
      });
    });
  });
});
