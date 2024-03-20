const minimumIsland = (grid) => {
  let visited = new Set()
  let smallest = Infinity
  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[0].length; c++) {
      let result = explore(grid, r, c, visited)
      if (result> 0 && result< smallest) {
        smallest = result;
      }
    }
  }
  return smallest
};

const explore = (grid, r, c, visited) => {
  if(r < 0 || r >= grid.length) return 0
  if (c < 0 || c >= grid[0].length) return 0
    
  if(grid[r][c] === "W") return 0
  
  let pos = r + ',' + c;
  if(visited.has(pos)) return 0 
  visited.add(pos)
  let count = 1
  
  count += explore(grid, r+1, c, visited) 
  count += explore(grid, r-1, c, visited)
  count += explore(grid, r, c+1, visited)
  count += explore(grid, r, c-1, visited)
  
  return count 
}
