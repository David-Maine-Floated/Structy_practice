const longestStreak = head => {
  let count = 0;
  let longest = 0; 
  let prevVal = null 
  while(head) {
  
    if(head.val === prevVal) {
      count++
    } else {

      count = 1
    }
    longest = Math.max(longest, count)
    prevVal = head.val 
    head = head.next 
    
  }
 
  
  return longest 
}