const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
  let pos = k + ',' + r + ',' + c
  if(pos in memo) return memo[pos]
  if(k >= 0 && outOfBounds(m, n, r, c)) return 1 
  if(k === 0 && !outOfBounds(m, n, r, c)) return 0 


  let total = 0;

  total += breakingBoundaries(m, n, k-1, r+1, c, memo)
  total +=breakingBoundaries(m, n, k-1, r-1, c, memo)
  total +=breakingBoundaries(m, n, k-1, r, c+1, memo)
  total += breakingBoundaries(m, n, k-1, r, c-1, memo)
  

  memo[pos] = total 
  return total 
};


const outOfBounds = (m, n, r,c) => {
  if(r < 0 || r >= m) return true
  if (c < 0 || c >= n) return true 
  return false 
}