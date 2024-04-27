const stringSearch = (grid, s) => {

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(explore(grid, s, 0, row, col)) return true 
    }
  }
  return false 
};

//o(n*m ^ n*m)

const explore = (grid, s, i, row, col) => {
  if(i === s.length) return true 
  if(row < 0 || row >= grid.length) return false 
  if(col < 0 || col >= grid[0].length) return false 

  if(s[i] !== grid[row][col]) return false 

  const char = grid[row][col]
  grid[row][col] = '*'
  const result = explore(grid, s, i+1, row+1, col) ||
    explore(grid, s, i+1, row-1, col) ||
    explore(grid, s, i+1, row, col+1) ||
    explore(grid, s, i+1, row, col-1)

  grid[row][col] = char 
  return result 
}