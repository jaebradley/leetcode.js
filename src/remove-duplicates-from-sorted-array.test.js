var removeDuplicates = require('./remove-duplicates-from-sorted-array');

describe('removeDuplications', function() {
  describe('when no values exist', function() {
    it('returns length of 1 and does not operate on the input array', function() {
      var values = [];

      expect(removeDuplicates(values)).toEqual(1);
      expect(values.length).toEqual(0);
    });
  });

  describe('when values exist', function() {
    describe('when each value is unique', function() {
      it('returns length of values and does not modify values', function() {
        var values = [1, 2, 3];

        expect(removeDuplicates(values)).toEqual(3);
        expect(values.length).toEqual(3);
        expect(values[0]).toEqual(1);
        expect(values[1]).toEqual(2);
        expect(values[2]).toEqual(3);
      });
    });

    describe('when each value is not unique', function() {
      it('returns length of unique values and modifies initial array values to include these values', function() {
        var i,
            values = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];

        expect(removeDuplicates(values)).toEqual(4);
        expect(values.length).toEqual(14);

        for (i = 0; i < 4; i += 1) {
          expect(values[i]).toEqual(i + 1);
        }
      })
    })
  });
})
