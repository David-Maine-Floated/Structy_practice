const nonAdjacentSum = (nums, i = 0,memo={}) => {
  if(i in memo) return memo[i]
  if(i >= nums.length) return 0 

  

    let included = nums[i] + nonAdjacentSum(nums, i+2, memo)
    let excluded = nonAdjacentSum(nums, i+1, memo)

  memo[i] = Math.max(included, excluded)
  return memo[i]
  
  
};
