/**
 * https://leetcode.com/problems/combination-sum-ii/
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var results = [],
      value,
      nextTarget,
      nextIndex;

  candidates = candidates.sort(function(firstCandidate, secondCandidate) { return firstCandidate - secondCandidate });

  dfs(0, target, []);

  function dfs(currentIndex, currentTarget, currentResult) {
    if (currentTarget == 0) {
      results.push(currentResult.slice());
      return;
    } else if (currentTarget < 0) {
      return;
    }

    var i;

    for (i = currentIndex; i < candidates.length; i += 1) {
      if ((i > currentIndex && candidates[i] === candidates[i - 1])) {
        continue;
      }

      value = candidates[i];

      nextTarget = currentTarget - value;
      currentResult.push(value);
      nextIndex = i + 1;

      dfs(nextIndex, nextTarget, currentResult);

      currentResult.pop();
    }
  }

  return results;
};

module.exports = combinationSum2;
