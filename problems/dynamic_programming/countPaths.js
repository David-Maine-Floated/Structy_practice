const countPaths = (grid, r=0,c=0, memo = {}) => {

  let pos = r + ',' + c 
  if(r === grid.length - 1 && c === grid[0].length - 1) return 1
  if(pos in memo) return memo[pos]

  let deltas = [[0, 1], [1, 0]]
  let count = 0
  for(let delta of deltas) {
    console.log(r, c)
    let [deltaR, deltaC] = delta
    let newR = r + deltaR;
    let newC = c + deltaC

    if(inbounds(grid, newR, newC)) {
      let result = countPaths(grid, newR, newC, memo)
      count += result  
    }
  }
  
  memo[pos] = count 
  return count 
  
};

const inbounds = (grid, r, c) => {
  if(r < 0 || r >= grid.length) return false 
  if(c < 0 || c >= grid[0].length) return false 
  if(grid[r][c] === 'X') return false 
  return true 
  
}