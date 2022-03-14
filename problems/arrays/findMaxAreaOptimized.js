function findMaxArea2(arr) {
  let maxArea = 0;
  let a = 0;
  let b = arr.length - 1;

  while (a < b) {
    const height = Math.min(arr[a], arr[b]);
    const width = b - a;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (arr[a] <= arr[b]) {
      a++;
    } else {
      b--;
    }
  }
  return maxArea;
}

// time: O(n)
// space: O(1)

console.log(findMaxArea2([4, 8, 1, 2, 3, 9]));
