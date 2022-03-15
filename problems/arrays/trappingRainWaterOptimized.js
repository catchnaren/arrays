function getTotalTrappedWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  maxLeft = 0;
  maxRight = 0;
  total = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        total += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        total += maxRight - heights[right];
      }
      right--;
    }
  }
  return total;
}

// time: O(n)
// space: O(1)

console.log(getTotalTrappedWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
