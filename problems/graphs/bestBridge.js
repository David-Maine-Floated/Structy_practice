const bestBridge = (grid) => {
  let mainIsland;
  
  for(let r = 0; r < grid.length; r++) {
    for(let c =0; c < grid[0].length; c++)
      if(grid[r][c] === "L") {
        mainIsland = exploreIsland(grid, r, c, new Set())
      }
  }
  
  const visited = new Set(mainIsland)
  const queue = []
  for(let pos of mainIsland) {
    const [row, col] = pos.split(',').map(Number)
    queue.push([row, col, 0])
  
  }
  
  while(queue.length) {
    let [r, c, count] = queue.shift()
    const pos = r + ',' + c 
    console.log(count)
    if(grid[r][c] === 'L' && !mainIsland.has(pos)) return count - 1
    
    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for(let delta of deltas) {
      const [deltaRow, deltaCol] = delta 
      const newRow = r + deltaRow
      const newCol = c + deltaCol
      const newPos = newRow + ',' + newCol
      if(inRange(grid, newRow, newCol) && !visited.has(newPos)) {
        visited.add(newPos)
        queue.push([newRow, newCol, count + 1])
      }
    }
  }
}




const inRange = (grid, r, c) => {
  if(r < 0 || r >= grid.length) return false  
  if(c < 0 || c >= grid[0].length) return false 
  return true 

}

const exploreIsland = (grid, r, c, mainIsland) => {
  if(!inRange(grid, r , c) || grid[r][c] === 'W') return mainIsland
  let pos = r + ',' + c 
  if(mainIsland.has(pos)) return mainIsland
     
  mainIsland.add(pos)
    
  exploreIsland(grid, r+1, c, mainIsland)
  exploreIsland(grid, r-1, c, mainIsland)
  exploreIsland(grid, r, c+1, mainIsland)
  exploreIsland(grid, r, c-1, mainIsland)
    
  return mainIsland
  
}
