const sumPossible = (amount, numbers, count = {}) => {
  if(amount in count) return count[amount]
  if(amount === 0) return true 
  if(amount < 0) return false  
  
  for(let num of numbers) {
    let result = sumPossible(amount - num, numbers,  count)
    if(result === true ) {
      count[amount] = true 
      return true
    }
    
  }
  count[amount] = false
  return false 
};