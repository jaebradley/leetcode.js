var canVisitAllRooms = require('./keys-and-rooms');

describe('canVisitAllRooms', function() {
  describe('when one room', function() {
    describe('when room has no keys', function() {
      it('all rooms can be visited', function() {
        expect(canVisitAllRooms([[]])).toBe(true);
      });
    });

    describe('when room has key to itself', function() {
      it('all rooms can be visited', function() {
        expect(canVisitAllRooms([[0]])).toBe(true)
      });
    });
  });

  describe('when two rooms', function() {
    describe('when first room has key to second room', function() {
      it('all rooms can be visited', function() {
        expect(canVisitAllRooms([1], [])).toBe(true);
      });
    });

    describe('when first room has no keys', function() {
      it('not all rooms can be visited', function() {
        expect(canVisitAllRooms([[], []])).toBe(false);
      });
    });
  });

  describe('when three rooms', function() {
    describe('when first and last room have keys to second room', function() {
      it('not all rooms can be visited', function() {
        expect(canVisitAllRooms([[1], [], [1]])).toBe(false);
      });
    });

    describe('when first room has key to second room which has key to last room', function() {
      it('all rooms can be visited', function() {
        expect(canVisitAllRooms([1], [2], [])).toBe(true);
      });
    });

    describe('when first room has key to second and third rooms', function() {
      it('all rooms can be visited', function() {
        expect(canVisitAllRooms([[1, 2], [], []])).toBe(true);
      });
    });
  });
});
