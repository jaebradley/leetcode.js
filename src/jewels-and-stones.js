/**
https://leetcode.com/problems/jewels-and-stones/

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  var distinctJ = new Set(J);
  var count = 0;

  for (var i = 0; i < S.length; i += 1) {
    var character = S[i];
    if (distinctJ.has(character)) {
      count += 1;
    }
  }

  return count;
};

module.exports = numJewelsInStones;
