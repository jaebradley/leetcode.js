/**
 *
 * https://leetcode.com/problems/coin-change/description/

* algorithms
* Medium (26.67%)
* Total Accepted:    104.5K
* Total Submissions: 389.4K
* Testcase Example:  '[1,2,5]\n11'

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount ofmoney cannot be made up by any combination of the coins, return -1.

Example 1:


Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:


Input: coins = [2], amount = 3
Output: -1


Note:
You may assume that you have an infinite number of each kind of coin
*/


var coinChange = function(coins, amount) {
    var minimumCoinCounts = [0];
    for (var i = 1; i <= amount; i += 1) {
      var minCoinCount = Number.MAX_SAFE_INTEGER;
      for (var j = 0; j < coins.length; j += 1) {
        var coin = coins[j];
        var previousCoinIndex = i - coin;
        if (previousCoinIndex >= 0) {
          var previousCoinCount = minimumCoinCounts[previousCoinIndex];
          if (previousCoinCount < minCoinCount && previousCoinCount >= 0) {
            minCoinCount = previousCoinCount;
          }
        }
      }
      if (minCoinCount < Number.MAX_SAFE_INTEGER) {
        minimumCoinCounts.push(minCoinCount + 1);
      } else {
        minimumCoinCounts.push(-1);
      }
    }
    return minimumCoinCounts.pop();
};

module.exports = coinChange;
