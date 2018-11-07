var canFinish = require('./course-schedule');

describe('canFinish', function() {
  describe('when two courses exist', function() {
    describe('when a cycle exists', function() {
      it('is false', function() {
        expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
      });
    });

    describe('when a cycle does not exist', function() {
      describe('when second course depends on the first course', function() {
        it('is true', function() {
          expect(canFinish(2, [[1, 0]])).toBe(true);
        });
      });

      describe('when no prerequisites exists', function() {
        it('is true', function () {
          expect(canFinish(2, [])).toBe(true);
        });
      });
    });
  });

  describe('when three courses exist', function() {
    describe('when a cycle exists', function() {
      describe('when all courses depend on each other', function() {
        it('is false', function() {
          var prerequisites = [
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 2],
            [2, 0],
            [2, 1],
          ];
          expect(canFinish(3, prerequisites)).toBe(false);
        });
      });

      describe('when the first and second course depend on each other', function() {
        it('is false', function() {
          var prerequisites = [
            [0, 1],
            [1, 0],
          ];
          expect(canFinish(3, prerequisites)).toBe(false);
        });
      });

      describe('when the second and third course depend on each other', function() {
        it('is false', function() {
          var prerequisites = [
            [1, 2],
            [2, 1],
          ];
          expect(canFinish(3, prerequisites)).toBe(false);
        });
      });

      describe('when first and third course depend on each other', function() {
        it('is false', function() {
          var prerequisites = [
            [0, 2],
            [2, 0],
          ];
          expect(canFinish(3, prerequisites)).toBe(false);
        });
      });
    });

    describe('when a cycle does not exist', function () {
      describe('when the first course depends on the second course', function() {
        it('is true', function() {
          expect(canFinish(3, [[0, 1]])).toBe(true);
        });

        describe('when second course depends on third course', function() {
          it('is true', function() {
            expect(canFinish(3, [[0, 1], [1, 2]])).toBe(true);
          });
        });

        describe('when third course depends on first course', function() {
          it('is true', function() {
            expect(canFinish(3, [[0, 1], [2, 0]])).toBe(true);
          })
        })
      });
    })
  });
});
