var updateMatrix = require('./01-matrix');

describe('updateMatrix', function() {
  describe('when matrix is 2 by 2', function() {
    describe('when matrix is only 0s', function() {
      it('outputs matrix that is only 0s', function() {
        expect(updateMatrix([
          [0, 0],
          [0, 0],
        ])).toEqual([
          [0, 0],
          [0, 0],
        ]);
      });
    });

    describe('when matrix is only 1s, except for one cell', function() {
      describe('when 0 is in upper left', function() {
        it('outputs matrix that is identical except bottom right is 2', function() {
          expect(updateMatrix([
            [0, 1],
            [1, 1],
          ])).toEqual([
            [0, 1],
            [1, 2],
          ]);
        });
      });

      describe('when 0 is in upper right', function() {
        it('outputs matrix that is identical except bottom left is 2', function() {
          expect(updateMatrix([
            [1, 0],
            [1, 1],
          ])).toEqual([
            [1, 0],
            [2, 1],
          ]);
        });
      });

      describe('when 0 is in bottom right', function() {
        it('outputs matrix that is identical except upper left is 2', function() {
          expect(updateMatrix([
            [1, 1],
            [1, 0],
          ])).toEqual([
            [2, 1],
            [1, 0],
          ]);
        });
      });

      describe('when 0 is in bottom left', function() {
        it('outputs matrix that is identical except upper right is 2', function() {
          expect(updateMatrix([
            [1, 1],
            [0, 1],
          ])).toEqual([
            [1, 2],
            [0, 1],
          ]);
        });
      });
    });
  });
});
