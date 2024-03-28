const bestBridge = (grid) => {

  let island;
  
  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[0].length; c++) {
      if(grid[r][c] === 'L') {
        let result = exploreIsland(grid, r,c, new Set())
        if(result.size) island = result 
        break
      }
    }
  }
  
  console.log(island)
  let visited = new Set(island)
  let queue = []
  for(let pos of island) {
    let [r,c] = pos.split(',').map(Number)
    queue.push([r,c,0])
  }

  let deltas = [[1,0], [-1,0], [0,1], [0,-1]]
  
  while(queue.length) {
    let [r,c,count] = queue.shift();
    let pos = r + ',' + c
    console.log(grid[r][c])
    console.log(island, pos)
    if(!island.has(pos) && grid[r][c] === "L") return count - 1
    
    for(let delta of deltas) {
      let [deltaR, deltaC] = delta;  
      let newRow = r + deltaR;
      let newCol = c + deltaC;
      let newPos = newRow + ',' + newCol 
      if(!visited.has(newPos) && inRange(grid, newRow, newCol)) {
        visited.add(newPos)
        queue.push([newRow, newCol, count + 1])
      }
    }
  }
}


const exploreIsland = (grid, r,c,island) => {
  let pos = r + ',' + c 
  if(island.has(pos) || !inRange(grid, r, c) || grid[r][c] === "W") return island  
  island.add(pos)
  
  exploreIsland(grid, r+1, c, island)
  exploreIsland(grid, r-1, c, island) 
  exploreIsland(grid, r, c+1, island) 
  exploreIsland(grid, r, c-1, island)
  
  return island 
}

const inRange = (grid, r, c) => {
  if(r < 0 || r >= grid.length) return false  
  if(c < 0 || c >= grid[0].length) return false 
  return true 

}