// Given a string s, return true if it is a palindrome,
// or false otherwise

const string = 'A man, a plan, a canal: Panama';

const isValidPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
};

// time: O(n)
// space: O(1)

console.log(isValidPalindrome(string));
