function maximumGap(nums) {
    if (nums.length < 2) {
      return 0;
    }
  
    // Sort the array using a linear-time sorting algorithm
    nums.sort((a, b) => a - b);
    let maximumGap = 0;
    for (let i = 1; i < nums.length; i++) {
      const diff = nums[i] - nums[i - 1];
      if (diff > maximumGap) {
        maximumGap = diff;
      }
    }
  
    return maximumGap;
  }
  