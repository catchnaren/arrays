function parseStringToArray(str) {
  const arr = [];
  for (let letter = 0; letter < str.length; letter++) {
    if (str[letter] !== '#') {
      arr.push(str[letter]);
    } else {
      arr.pop();
    }
  }
  return arr;
}

function compareStrings(s, t) {
  const sArr = parseStringToArray(s);
  const tArr = parseStringToArray(t);

  console.log({ sArr, tArr });

  if (sArr.length !== tArr.length) {
    return false;
  } else {
    for (let letter = 0; letter < sArr.length; letter++) {
      if (sArr[letter] !== tArr[letter]) {
        return false;
      }
    }
  }
  return true;
}

// time: O(a+b)
// space: O(a+b)

console.log(compareStrings('ab#z', 'az#z'));
