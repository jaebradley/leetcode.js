Helpful explanation / example code: https://leetcode.com/problems/combination-sum-ii/discuss/16861/Java-solution-using-dfs-easy-understand

Implementation:

* Sort function first
* Start with `0`
* If current target is `0` this means our current result hits our target so get the current result and push that to array of results
* If current target is less than `0` this means we overshot our target
* If current target is greater than `0` this means we can potentially add more values to target to get to target of `0`
* Get value for index, get next target (current target minus value), add value to current result (in base case this would be an empty array), and increment index to get next index
* Recursively call search function
* Once search function returns / finishes execution remove last element and go to next loop
  * In this next loop, keep iterating if not the first iteration and value is same as previous value
  * This prevents duplicate combinations
