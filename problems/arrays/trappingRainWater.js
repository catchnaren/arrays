function findTotalTrappedWater(arr) {
  let totalWater = 0;
  for (let p = 0; p < arr.length; p++) {
    let leftPointer = p;
    let rightPointer = p;
    let maxL = 0;
    let maxR = 0;

    while (leftPointer >= 0) {
      maxL = Math.max(maxL, arr[leftPointer]);
      leftPointer--;
    }

    while (rightPointer < arr.length) {
      maxR = Math.max(maxR, arr[rightPointer]);
      rightPointer++;
    }

    const currentWater = Math.min(maxL, maxR) - arr[p];
    totalWater += currentWater;
  }
  return totalWater;
}

// time: O(n^2)
// space: O(1)

console.log(findTotalTrappedWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
