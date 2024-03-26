// const minimumIsland = (grid) => {
//   let visited = new Set()
//   let smallest = Infinity
//   for(let r = 0; r < grid.length; r++) {
//     for(let c = 0; c < grid[0].length; c++) {
//       let result = explore(grid, r, c, visited)
//       if (result> 0 && result< smallest) {
//         smallest = result;
//       }
//     }
//   }
//   return smallest
// };

// const explore = (grid, r, c, visited) => {
//   if(r < 0 || r >= grid.length) return 0
//   if (c < 0 || c >= grid[0].length) return 0
    
//   if(grid[r][c] === "W") return 0
  
//   let pos = r + ',' + c;
//   if(visited.has(pos)) return 0 
//   visited.add(pos)
//   let count = 1
  
//   count += explore(grid, r+1, c, visited) 
//   count += explore(grid, r-1, c, visited)
//   count += explore(grid, r, c+1, visited)
//   count += explore(grid, r, c-1, visited)
  
//   return count 
// }


const minimumIsland = (grid) => {
  
  const visited = new Set()
  let min = Infinity
  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[0].length; c++) {
      let result = explore(grid, r, c, visited) 
      if(result !== 0 )min = Math.min(result, min)
    }
  }
  return min 
};

const explore = (grid, r, c, visited) => {
  let pos = r + ',' + c
  if(visited.has(pos) || outOfBounds(grid,r,c) || grid[r][c] === "W") return 0
  visited.add(pos)
  
  let length = 1
  
  length += explore(grid, r+1, c, visited)
  length += explore(grid, r-1, c, visited)
  length += explore(grid, r, c+1, visited)
  length += explore(grid, r, c-1, visited)

  
  return length  
} 

const outOfBounds = (grid, r,c) => {
  if(r < 0 || r >= grid.length) return true  
  if(c < 0 || c >= grid[0].length) return true 
  return false 
}


const exploreIteravtivley = (grid, r,c, visited) => {
  let pos = r + ',' + c 
  if(visited.has(pos) || grid[r][c] === 'W') return 0 
  let stack = [[r,c]]
  let length = 0;
  
  let deltas = [[1,0], [-1,0], [0,1], [0, -1]]
  
  while(stack.length) {
    let [r,c] = stack.shift()
    pos = r + ',' + c 
    
    if(outOfBounds(grid, r, c) || visited.has(pos)|| grid[r][c] === "W") continue 
    
    visited.add(pos) 
    length += 1
    
    for(let delta of deltas) {
      let [deltaR, deltaC] = delta
      let newRow = deltaR + r; 
      let newCol = deltaC + c;
      stack.push([newRow, newCol])
    
    } 
  }

  return length  
}
