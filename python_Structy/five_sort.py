def five_sort(nums):
  l = 0
  r = len(nums) - 1
  while l < r: 
    while nums[r] == 5 and l < r:
      r-= 1
    while nums[l] != 5 and l < r:
      l+=1

    nums[l], nums[r] = nums[r], nums[l]
    

  return nums