// Given a string s, find the length of the longest substring
// without repeating characters.

function getLongestSubstring(s) {
  if (s.length <= 1) {
    return s.length;
  }
  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {};
    let currentLength = 0;
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }
  return longest;
}

// time: O(n2)
// space: O(n)

console.log(getLongestSubstring('abcbdca'));
