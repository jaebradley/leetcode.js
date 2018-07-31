var canCompleteCircuit = require('./gas-station');

describe('#canCompleteCircuit', function() {
  it('should return 3', function() {
    var gas = [1, 2, 3, 4, 5];
    var cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toEqual(3);
  });

  it('should return -1', function() {
    var gas = [1, 2, 3, 4, 5];
    var cost = [3, 5, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toEqual(-1);
  });
});
