const arrayStepper = (nums, i=0, memo = {}) => {
  if(i in memo) return memo[i]
  let currentVal = nums[i]
  
  if(i + currentVal >= nums.length - 1) return true 

  let result = false 
  for(let indx = i+1; indx <= (currentVal + i); indx++) {
    if(arrayStepper(nums, indx, memo)) {
      return true 
    }
    
  }
  
  memo[i] = result 
  return result
  
};