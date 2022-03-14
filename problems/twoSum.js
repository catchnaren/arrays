function twoSum(arr, target) {
  for (let p1 = 0; p1 < arr.length; p1++) {
    const numberToFind = target - arr[p1];
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      if (numberToFind === arr[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
}

console.log(twoSum([1, 5, 7, 9, 2], 11));
