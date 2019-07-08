var dailyTemperatures = require('./daily-temperatures');

describe('dailyTemperatures', function() {
  describe('when two temperatures', function() {
    describe('when temperatures are increasing', function() {
      it('is [1, 0]', function() {
        expect(dailyTemperatures([10, 11])).toEqual([1, 0])
      })
    })
  })
})
