const closestCarrot = (grid, startRow, startCol) => {
  // todo
  let queue = [[startRow, startCol,0]]
  const visited = new Set([startRow + ',' + startCol]);
  
  while(queue.length > 0) {
    let [r,c, count] = queue.shift()
    if(grid[r][c] === "C") return count
    
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for(let delta of deltas) {
      const [deltaRow, deltaCol] = delta 
      const neighborRow = r + deltaRow
      const neighborCol = c + deltaCol 
      const neighborPos = neighborRow + ',' + neighborCol
      const inbound = inbounds(grid, neighborRow, neighborCol)
      if(inbound && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== "X") {
        visited.add(neighborPos)
        queue.push([neighborRow, neighborCol, count+1])
      
      }

    }
  }
  return -1 
};