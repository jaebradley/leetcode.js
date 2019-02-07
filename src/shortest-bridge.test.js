var shortestBridge = require('./shortest-bridge');

describe('shortestBridge', function() {
  describe('2 x 2', function() {
    it('is 0', function() {
      expect(
        shortestBridge([
          [1, 1],
          [1, 0],
        ])
      ).toBe(0);
    });

    it('is 1', function() {
      expect(
        shortestBridge([
          [0, 1],
          [1, 0],
        ])
      ).toBe(1);
    });
  });

  describe('3 x 3', function() {
    it('is 2', function() {
      expect(
        shortestBridge([
          [0,1,0],
          [0,0,0],
          [0,0,1],
        ])
      ).toBe(2);
    });
  });

  describe('5 x 5', function() {
    describe('when one island is surrounded by the other', function() {
      it('is 1', function() {
        expect(
          shortestBridge([
            [1,1,1,1,1],
            [1,0,0,0,1],
            [1,0,1,0,1],
            [1,0,0,0,1],
            [1,1,1,1,1],
          ])
        ).toBe(1);
      });
    });

    describe('when one island has peninsula that is close to other island', function() {
      it('is 1', function() {
        expect(
          shortestBridge([
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
          ])
        );
      })
    });
  });
});
