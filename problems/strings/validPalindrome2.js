/**  
 Given a string s, return true if the s can be palindrome
 after deleting at most one character from it.
*/

const validSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isAlmostPalindrome = (s) => {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalindrome(s, left + 1, right) ||
        validSubPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

// time: O(n)
// space: O(1)

console.log(isAlmostPalindrome('abccdba'));
