// const closestCarrot = (grid, startRow, startCol) => {
//   // todo
//   let queue = [[startRow, startCol,0]]
//   const visited = new Set([startRow + ',' + startCol]);
  
//   while(queue.length > 0) {
//     let [r,c, count] = queue.shift()
//     if(grid[r][c] === "C") return count
    
//     const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
//     for(let delta of deltas) {
//       const [deltaRow, deltaCol] = delta 
//       const neighborRow = r + deltaRow
//       const neighborCol = c + deltaCol 
//       const neighborPos = neighborRow + ',' + neighborCol
//       const inbound = inbounds(grid, neighborRow, neighborCol)
//       if(inbound && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== "X") {
//         visited.add(neighborPos)
//         queue.push([neighborRow, neighborCol, count+1])
      
//       }

//     }
//   }
//   return -1 
// };


const closestCarrot = (grid, startRow, startCol) => {
  
  let visited = new Set()
  
  let deltas = [[1,0], [-1,0],[0,1], [0,-1]]
  let queue= [[startRow, startCol, 0]]
  while(queue.length) {
    let [r,c, count] = queue.shift();
    let pos = r + ',' + c 
    if(visited.has(pos) || grid[r][c] === 'X' ) continue 
    visited.add(pos)
    
    if(grid[r][c] === 'C') return count 

    
    for(let delta of deltas) {
      let [deltaR, deltaC] = delta 
      let newRow = r + deltaR
      let newCol = c + deltaC
      if(inbounds(grid, newRow, newCol)) {
        queue.push([newRow, newCol, count+1])
      }
    }
  }
  return -1
};


const inbounds = (grid, r, c) => {
  if(r < 0 || r >= grid.length) return false 
  if(c < 0 || c >= grid[0].length) return false 
  return true 
}
