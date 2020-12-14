/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Say you have an array for which the ith element is the price of a given stock on day i.

  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

  Note that you cannot sell a stock before you buy one.

  Example 1:

  Input: [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
              Not 7-1 = 6, as selling price needs to be larger than buying price.
  Example 2:

  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.

  Strategy:
  1. There are really two states - attempt to buy at index i and attempt to sell at index i
  2. If attempting to buy at index i, you want to check and see if the cost of buying at index i is less than the cost of buying at any previous index - if it is, that's the minimum cost of buying a stock from index [0-i]
  3. If attempting to buy at index i, you want to check and see what the minimum cost of buying from index [0 - i-1] was - this should give the max profit of selling at index i
  4. If the profit from selling is greater than the previous max profit, update the previous max profit
  5. Continue this pattern until all values have been processed - whatever the max profit value is at the end is the global maximum
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var previousBuy = -prices[0];
  var previousSell = 0;

  for (var i = 1; i < prices.length; i += 1) {
    var price = prices[i];
    previousBuy = Math.max(previousBuy, -price);
    previousSell = Math.max(previousSell, previousBuy + price);
  }

  return previousSell;
};

module.exports = maxProfit;
