// Given a string s, find the length of the longest substring
// without repeating characters.

function getLongestSubstring(s) {
  if (s.length <= 1) {
    return s.length;
  }
  const seenChars = {};
  let longest = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars[currentChar];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

// time: O(n)
// space: O(n)

console.log(getLongestSubstring('abcbdaac'));
