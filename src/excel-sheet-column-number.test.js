var titleToNumber = require('./excel-sheet-column-number');

describe('titleToNumber', function() {
  describe('when title is A', function() {
    it('is 1', function() {
      expect(titleToNumber('A')).toEqual(1);
    });
  });

  describe('when title is Z', function() {
    it('is 26', function() {
      expect(titleToNumber('Z')).toEqual(26);
    });
  });

  describe('when title is AA', function() {
    it('is 27', function() {
      expect(titleToNumber('AA')).toEqual(27);
    });
  });

  describe('when title is AB', function() {
    it('is 28', function() {
      expect(titleToNumber('AB')).toEqual(28);
    });
  });

  describe('when title is ZZ', function() {
    it('is 702', function() {
      expect(titleToNumber('ZZ')).toEqual(702);
    });
  });

  describe('when title is AAA', function() {
    it('is 703', function() {
      expect(titleToNumber('AAA')).toEqual(703);
    });
  });
});
