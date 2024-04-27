const stringSearch = (grid, s) => {
  
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      let result = explore(grid, s, 0, row, col)
      if(result) return result 
    }
  }
  return false 
};

//o(n*m ^ n*m)

const explore = (grid, s, i, row, col) => {
  if(i === s.length) return true 
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if(grid[row][col] !== s[i]) return false  //HIHIHIHI I shant' be moved

  const char = grid[row][col]
  grid[row][col] = '*'
  let deltas = [[1,0], [-1, 0], [0,1], [0,-1]];
  let finalResult = false 
  for(let delta of deltas) {
    const [deltaR, deltaC] = delta 
    const newR = deltaR + row;
    const newC = deltaC + col;
    result = explore(grid, s, i+1, newR, newC)
    if(result) finalResult = true 
  }
  grid[row][col] = char
  return finalResult  
}