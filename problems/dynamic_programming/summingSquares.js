const summingSquares = (n) => {

  return explore(n, memo= {})
  
};


const explore =(n, memo) => {
  if(n in memo) return memo[n]
  if(n === 0) return 0

  
  let count = Infinity
  for(let i = 1; i <= Math.sqrt(n); i++) {
    const square = i*i 
    const result = explore(n - square, memo) + 1
    count = Math.min(count, result)
  }

  
  memo[n] = count
  return count 
}