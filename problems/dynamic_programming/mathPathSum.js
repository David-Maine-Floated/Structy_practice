const maxPathSum = (grid, r=0, c=0, memo = {}) => {
  let pos = r + ',' + c 
  if(pos in memo) return memo[pos] 

  
  if(r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c]
  if(r === grid.length || c === grid[0].length) return 0 
  
  

  
  let count = + grid[r][c] + Math.max(maxPathSum(grid, r+1, c, memo), maxPathSum(grid, r, c+1, memo))

  memo[pos] = count 
  return count 
};