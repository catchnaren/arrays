function findMaxArea(arr) {
  let maxArea = 0;
  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      const height = Math.min(arr[a], arr[b]);
      const width = b - a;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

// time: O(n^2)
// space: O(1)

console.log(findMaxArea2([7, 1, 2, 3, 9]));
