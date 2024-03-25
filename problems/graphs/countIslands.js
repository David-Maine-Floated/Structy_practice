// const islandCount = (grid) => {
//   // todo
//   let visited = new Set();
//   let count = 0
//   for(let i = 0; i < grid.length; i++) {
//     for(let j = 0; j < grid[0].length; j++) {
//         if (explore([i, j], visited, grid) === true) count+=1
//     }
//   }
//   return count  
// };

// const explore = (location, visited, grid) => {
//   let [x, y] = location
//   const rowInbounds = 0 <= x && x < grid.length;
//   const colInbounds = 0 <= y && y < grid[0].length;
//   if (!rowInbounds || !colInbounds) return false;
      
//   if(grid[x][y] === 'W') return false  

//   let pos = x + ',' + y
//   if(visited.has(pos)) return false 
//   visited.add(pos)
  
//   explore([x+1, y], visited, grid)
//   explore([x-1, y], visited, grid)
//   explore([x, y+1], visited, grid)
//   explore([x, y-1], visited, grid)
//   return true  
// }


const islandCount = (grid) => {
  
  const visited = new Set()
  let count = 0
  for(let r = 0; r < grid.length; r++) {
   
    for(let c = 0; c < grid[0].length; c++) {
      if(explore(r,c,visited, grid)) count +=1
    }
  }
  return count   
};

const explore = (r,c, visited, grid) => {
  console.log(r,c,visited)
  let pos = r + ',' + c
  if(visited.has(pos) || !inbounds(grid,r,c) || grid[r][c] === 'W') return false  
  visited.add(pos)
  explore(r+1, c, visited, grid)
  explore(r-1, c, visited, grid)
  explore(r, c+1, visited, grid) 
  explore(r, c-1, visited, grid) 
  
  return true 
}


const inbounds = (grid, r, c) => {
  if(r < 0 || r >= grid.length) return false 
  if(c < 0 || c >= grid[0].length) return false 
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