const islandCount = (grid) => {
  // todo
  let visited = new Set();
  let count = 0
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
        if (explore([i, j], visited, grid) === true) count+=1
    }
  }
  return count  
};

const explore = (location, visited, grid) => {
  let [x, y] = location
  const rowInbounds = 0 <= x && x < grid.length;
  const colInbounds = 0 <= y && y < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
      
  if(grid[x][y] === 'W') return false  

  let pos = x + ',' + y
  if(visited.has(pos)) return false 
  visited.add(pos)
  
  explore([x+1, y], visited, grid)
  explore([x-1, y], visited, grid)
  explore([x, y+1], visited, grid)
  explore([x, y-1], visited, grid)
  return true  
}