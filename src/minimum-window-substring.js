/**
 * https://leetcode.com/problems/minimum-window-substring/

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (!s || s.length < t.length || s.length <= 0) {
    return '';
  }


  // Build character counts for t
  // Use this to know if substring is contained in window
  var characterCounts = {};
  for (var index = 0; index < t.length; index += 1) {
    var character = t[index];
    if (character in characterCounts) {
      characterCounts[character] += 1;
    } else {
      characterCounts[character] = 1;
    }
  }

  var count = 0;
  var minLength = s.length + 1;
  var minimumLeftIndex = 0;
  var leftIndex = 0;

  for (var rightIndex = 0; rightIndex < s.length; rightIndex += 1) {
    // As iterate through characters, if matching character is found, decrement character counts
    // If counts for given character are greater than (or equal to 0), increment count value
    // count represents count of substring characters in current window
    var rightCharacter = s[rightIndex];
    if (rightCharacter in characterCounts) {
      characterCounts[rightCharacter] -= 1;
      if (characterCounts[rightCharacter] >= 0) {
        count += 1;
      }
    }

    // When substring, keep track of smallest left index
    // Close left-side of window on each iteration
    // If match is found, decrement current substring count
    // Increment character counts for the matching character
    while (count === t.length) {
      var currentLength = rightIndex - leftIndex + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        minimumLeftIndex = leftIndex;
      }

      var leftCharacter = s[leftIndex];
      if (leftCharacter in characterCounts) {
        characterCounts[leftCharacter] += 1;
        if (characterCounts[leftCharacter] > 0) {
          count -= 1;
        }
      }

      leftIndex += 1;
    }
  }

  // If minLength hasn't been modified (since minLength could be length of entire string) return empty string
  if (minLength > s.length) {
    return "";
  }

  return s.substring(minimumLeftIndex, minimumLeftIndex + minLength);
};

module.exports = minWindow;
