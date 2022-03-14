function findTwoSum(arr, target) {
  const hashMap = {};
  for (let p = 0; p < arr.length; p++) {
    const currentMapValue = hashMap[arr[p]];
    if (currentMapValue >= 0) {
      return [currentMapValue, p];
    } else {
      const numberToFind = target - arr[p];
      hashMap[numberToFind] = p;
    }
  }
  return null;
}

// time: O(n)
// space: O(n)

console.log(findTwoSum([1, 3, 7, 9, 2], 11));
