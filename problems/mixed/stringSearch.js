const stringSearch = (grid, s) => {
  
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      let result = explore(grid, s, 0, row, col, visited = new Set())
      if(result) return result 
    }
  }
  return false 
};

const explore = (grid, s, i, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  const pos = row + ',' + col
  if(i === s.length) return true 
  if(grid[row][col] !== s[i]) return false 
  
  if(visited.has(pos)) return false 
  visited.add(pos)

  let deltas = [[1,0], [-1, 0], [0,1], [0,-1]];
  for(let delta of deltas) {
    const [deltaR, deltaC] = delta 
    const newR = deltaR + row;
    const newC = deltaC + col;
    let result = explore(grid, s, i+1, newR, newC, visited)
    if(result) return result 
  }
  return false 
}