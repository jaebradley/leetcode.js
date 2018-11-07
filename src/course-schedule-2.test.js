var findOrder = require('./course-schedule-2');

describe('findOrder', function() {
  describe('when cycle exists', function() {
    describe('when two courses exist', function() {
      it('is an empty array', function() {
        expect(findOrder(2, [[0, 1], [1, 0]])).toEqual([]);
      });
    });

    describe('when three courses exist', function() {
      describe('when first and second course depend on each other', function() {
        it('is an empty array', function() {
          expect(findOrder(3, [[1, 0], [0, 1]])).toEqual([]);
        });
      });

      describe('when first and third course depend on each other', function() {
        it('is an empty array', function() {
          expect(findOrder(3, [[2, 0], [0, 2]])).toEqual([]);
        });
      });

      describe('when second and third course depend on each other', function() {
        it('is an empty array', function() {
          expect(findOrder(3, [[1, 2], [2, 1]])).toEqual([]);
        });
      });
    });
  });

  describe('when cycle does not exist', function() {
    describe('when one course exists', function() {
      it('is single element array', function() {
        expect(findOrder(1, [])).toEqual([0]);
      });
    });

    describe('when two courses exist', function() {
      describe('when first course depends on second course', function() {
        it('is array with first course, then second course', function() {
          expect(findOrder(2, [[0, 1]])).toEqual([1, 0]);
        });
      });

      describe('when second course depends on first course', function() {
        it('is array with second course, then first course', function() {
          expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
        });
      });

      describe('when no dependencies exist', function() {
        it('is array with first course, then second course', function() {
          expect(findOrder(2, [])).toEqual([0, 1]);
        });
      });
    });

    describe('when three courses exist', function() {
      describe('when first course depends on second course', function() {
        it('is array with second course, then first course, then third course', function() {
          expect(findOrder(3, [[0, 1]])).toEqual([1, 0, 2]);
        });

        describe('when first course depends on third course', function() {
          it('is array with second course, then third course, then first course', function() {
            expect(findOrder(3, [[0, 1], [0, 2]])).toEqual([1, 2, 0]);
          });
        });

        describe('when second course depends on third course', function() {
          it('is array with third course, then second course, then first course', function() {
            expect(findOrder(3, [[0, 1], [1, 2]])).toEqual([2, 1, 0]);
          });
        });

        describe('when third course depends on second course', function() {
          it('is array with second course, then first course, then third course', function() {
            expect(findOrder(3, [[0, 1], [2, 1]])).toEqual([1, 0, 2]);
          });
        });

        describe('when third course depends on first course', function() {
          it('is array with second course, then first course, then third course', function() {
            expect(findOrder(3, [[0, 1], [2, 0]])).toEqual([1, 0, 2]);
          });
        });
      });

      describe('when first course depends on third course', function() {
        it('is array with third course, then first course, then second course', function() {
          expect(findOrder(3, [[0, 2]])).toEqual([2, 0, 1]);
        });

        describe('when first course depends on second course', function() {
          it('is array with third course, then second course, then first course', function() {
            expect(findOrder(3, [[0, 2], [0, 1]])).toEqual([2, 1, 0]);
          });
        });
      });

      describe('when second course depends on first course', function() {
        it('is array with first course, then second course, then third course', function() {
          expect(findOrder(3, [[1, 0]])).toEqual([0, 1, 2]);
        });
      });

      describe('when second course depends on third course', function() {
        it('is array with first course, then third course, then second course', function() {
          expect(findOrder(3, [[1, 2]])).toEqual([0, 2, 1]);
        });
      });

      describe('when third course depends on first course', function() {
        it('is array with first course, then second course, then third course', function() {
          expect(findOrder(3, [[2, 0]])).toEqual([0, 1, 2]);
        });
      });

      describe('when third course depends on second course', function() {
        it('is array with first course, then second course, then third course', function() {
          expect(findOrder(3, [[2, 0]])).toEqual([0, 1, 2]);
        });
      });
    });
  });
});
