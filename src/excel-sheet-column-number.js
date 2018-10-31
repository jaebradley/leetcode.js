/**
 * https://leetcode.com/problems/excel-sheet-column-number/
 * Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
*/

/**
 * You need to multiply by 26 at the start of each iteration
 * because it represents the number of steps needed to get to the next level
 * with the same prefix.
 *
 * Each additional alphabetical level requires the previous amount of work
 * multiplied by each alphabetical letter.
 *
 * For example, ZZ precedes AAA which has to get to AZZ.
 * To get to AZZ, basically have to do all of ZZ steps.
 * Then gets to BAA, and to get to CAA, has to do BZZ, which is all of ZZ steps.
 *
 * Thus, do ZZ steps, 26 times before getting back to ZZ_
 *
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var sum = 0,
      i,
      character;

  for (i = 0; i < s.length; i += 1) {
    sum *= 26;
    character = s[i];
    sum += character.charCodeAt() - 'A'.charCodeAt() + 1;
  }

  return sum;
};

module.exports = titleToNumber;
