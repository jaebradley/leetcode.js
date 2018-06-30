/**
 * https://leetcode.com/problems/valid-parentheses/description/

* algorithms
* Easy (34.18%)
* Total Accepted:    355.1K
* Total Submissions: 1M
* Testcase Example:  '"()"'

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:


        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.


Note that an empty string is also considered valid.

Example 1:


Input: "()"
Output: true


Example 2:


Input: "()[]{}"
Output: true


Example 3:


Input: "(]"
Output: false


Example 4:


Input: "([)]"
Output: false


Example 5:


Input: "{[]}"
Output: true
*/

var isValid = function(s) {
    var validOpenParentheses = ['(', '{', '['];
    var validCloseParentheses = [')', '}', ']'];
    var closedToOpenParentheses = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    var openParentheses = [];
    var i;
    for (i = 0; i < s.length; i++) {
      var c = s[i];
      if (validOpenParentheses.indexOf(c) >= 0) {
        openParentheses.push(c);
      } else if (validCloseParentheses.indexOf(c) >= 0) {
        var lastOpenParentheses = openParentheses.pop();
        if (closedToOpenParentheses[c] !== lastOpenParentheses) {
          return false;
        }
      }
    }
    return !(openParentheses.length > 0);
};

module.exports = isValid;
