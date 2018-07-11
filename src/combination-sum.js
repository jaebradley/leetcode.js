/**
 * [39] Combination Sum

https://leetcode.com/problems/combination-sum/description/

* algorithms
* Medium (42.48%)
* Total Accepted:    232.6K
* Total Submissions: 547.6K
* Testcase Example:  '[2,3,6,7]\n7'

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:


        All numbers (including target) will be positive integers.
        The solution set must not contain duplicate combinations.


Example 1:


Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]


Example 2:


Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * Backtrack using all potential candidates that have yet to be considered

 * Store these potential combinations in a temporary array, currentCombination by pushing new candidates

 * After a candidate is evaluated, if the remaining sum gets down to 0 (i.e. a valid combination is found)
 * add the array to the list of valid combinations.

 * Finally, the current combination pops the last element
 *  replaces it with a new candidate
 *  backtracks with this new candidate

 */
var backtrack = function(candidates, target, combinations, currentCombination, remainder, start) {
  if (remainder < 0) {
    return;
  }

  if (remainder === 0) {
    combinations.push(currentCombination.slice());
  } else {
    for (var i = start; i < candidates.length; i += 1) {
      var candidate = candidates[i];
      currentCombination.push(candidate);
      backtrack(candidates, target, combinations, currentCombination, remainder - candidate, i);
      currentCombination.pop();
    }
  }
};

var combinationSum = function(candidates, target) {
  var combinations = [];

  backtrack(candidates, target, combinations, [], target, 0);

  return combinations;
};

module.exports = combinationSum;
