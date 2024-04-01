const fib = (n) => {
  const count = {}
  
  return fibRecurse(n, count)
};

const fibRecurse = (n, count) => {
  if(n in count) return count[n] 
  if(n === 0) return 0 
  if(n === 1) return 1 
  
  count[n] = fibRecurse(n-1, count) + fibRecurse(n-2, count)
  
  return count[n]

}