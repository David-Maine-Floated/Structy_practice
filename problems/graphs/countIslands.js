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



//iterative: 

const islandCountIterative = (grid) => {
  // todo
  let visited = new Set();
  let count = 0
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
        if (exploreIteverative([i, j], visited, grid) === true) count+=1
    }
  }
  return count  
};

const exploreIteverative = (location, visited, grid) => {
  let [x, y] = location 
  if(grid[x][y] === 'W') return false 
  let pos = x + ',' + y
  if(visited.has(pos)) return false 

  
  let stack = [location]
  
  while(stack.length) {
    let current = stack.pop()
    let [x, y] = current 
    const rowInbounds = 0 <= x && x < grid.length;
    const colInbounds = 0 <= y && y < grid[0].length;
    if (!rowInbounds || !colInbounds) continue;

    if(grid[x][y] === 'W') continue;  

    pos = x + ',' + y
    if(visited.has(pos)) continue  
    visited.add(pos)

   stack.push([x+1, y])
   stack.push([x-1, y])
   stack.push([x, y+1])
   stack.push([x, y-1])
    
  }

  return true  
}