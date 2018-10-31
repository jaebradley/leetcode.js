var merge = require('./merge-intervals');
var Interval = require('./Interval');

describe('merge', function() {
  describe('when intervals are null', function() {
    it('results in an empty array', function() {
      expect(merge(null)).toEqual([]);
    });
  });

  describe('when intervals are empty', function() {
    it('results in an empty array', function() {
      expect(merge([])).toEqual([]);
    });
  });

  describe('when intervals are not empty', function() {
    var firstIntervalStart,
        firstIntervalEnd,
        secondIntervalStart,
        secondIntervalEnd,
        firstInterval,
        secondInterval;

    beforeEach(function() {
      firstIntervalStart = 10;
      firstIntervalEnd = 20;
    });

    describe('when second interval starts before the first interval', function() {
      beforeEach(function() {
        secondIntervalStart = firstIntervalStart - 2;
      });

      describe('when second interval ends before the first interval ends', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd - 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at second interval start and ends at first interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(secondIntervalStart, firstIntervalEnd)])
        });
      });

      describe('when second interval ends on the end of the first interval', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at second interval start and ends at first interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(secondIntervalStart, firstIntervalEnd)]);
        });
      });

      describe('when second interval ends after the first interval ends', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd + 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at second interval start and ends at second interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(secondIntervalStart, secondIntervalEnd)]);
        });
      });

      describe('when second interval ends before the first interval', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalStart - 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('two independent intervals', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([secondInterval, firstInterval]);
        });
      });

      describe('when second interval ends on the start of the first interval', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalStart;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at second interval start and ends at second interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(secondIntervalStart, firstIntervalEnd)]);
        });
      });
    });

    describe('when second interval starts on the first interval', function() {
      beforeEach(function() {
        secondIntervalStart = firstIntervalStart;
      });

      describe('when second interval ends before the first interval ends', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd - 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at first interval start and ends at first interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(firstIntervalStart, firstIntervalEnd)]);
        });
      });

      describe('when second interval ends on the end of the first interval', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at first interval start and ends at first interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(firstIntervalStart, firstIntervalEnd)]);
        });
      });

      describe('when second interval ends after the first interval ends', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd + 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at first interval start and ends at second interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(firstIntervalStart, secondIntervalEnd)]);
        });
      });

      describe('when second interval ends on the start of the first interval', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalStart;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval is first interval', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([firstInterval]);
        });
      });
    });

    describe('when second interval starts after the first interval', function() {
      beforeEach(function() {
        secondIntervalStart = firstIntervalStart + 1;
      });

      describe('when second interval ends before the first interval ends', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd - 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval is first interval', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([firstInterval]);
        });
      });

      describe('when second interval ends on the end of the first interval', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at first interval start and ends at first interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([firstInterval]);
        });
      });

      describe('when second interval ends after the first interval ends', function() {
        beforeEach(function() {
          secondIntervalEnd = firstIntervalEnd + 1;
          firstInterval = new Interval(firstIntervalStart, firstIntervalEnd);
          secondInterval = new Interval(secondIntervalStart, secondIntervalEnd);
        });

        it('merged interval that starts at first interval start and ends at second interval end', function() {
          expect(merge([firstInterval, secondInterval])).toEqual([new Interval(firstIntervalStart, secondIntervalEnd)]);
        });
      });
    });
  });
});
