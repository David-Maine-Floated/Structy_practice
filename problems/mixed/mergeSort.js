const mergeSort = (nums) => {
   if(nums.length <= 1) return nums

  let mid = Math.floor(nums.length/2)

  let left = nums.slice(0, mid)
  let right = nums.slice(mid)

  let sortedLeft = mergeSort(left)
  let sortedRight = mergeSort(right)

  return sort(sortedLeft, sortedRight)
};

const sort = (left, right) => {
  left.reverse()
  right.reverse()
  let result = []
  while(left.length > 0 && right.length > 0) {
    if(left[left.length - 1] < right[right.length - 1]) {
      result.push(left.pop())
    } else {
      result.push(right.pop())
    }
  }

  return result.concat(left.reverse()).concat(right.reverse())
}