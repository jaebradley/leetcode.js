/**
https://leetcode.com/problems/palindromic-substrings/description/

* algorithms
* Medium (54.87%)
* Total Accepted:    36.6K
* Total Submissions: 66.7K
* Testcase Example:  '"abc"'


Given a string, your task is to count how many palindromic substrings in this string.



The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.


Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".



Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".



Note:

The input string length won't exceed 1000.
*/

var calculateMatchingCharacters = function(string, startIndex, endIndex) {
  var count = 0;
  while (startIndex >= 0 && endIndex <= string.length - 1 && string[startIndex] === string[endIndex]) {
    count += 1;
    startIndex--;
    endIndex++;
  }
  return count;
}

var countSubstrings = function(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    count += calculateMatchingCharacters(s, i, i);
    count += calculateMatchingCharacters(s, i, i + 1);
  }
  return count;
};

module.exports = countSubstrings;
