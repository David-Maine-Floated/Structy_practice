// const shortestPath = (edges, nodeA, nodeB) => {
  
//   let graph = buildGraph(edges)
//   let queue = [[nodeA, 0]]
//   let visited = new Set([nodeA])

//   while(queue.length) {

//     let [current, distance] = queue.shift()

//     if(current === nodeB) return distance 
//     for(let neighbor of graph[current]) {
//       if(!visited.has(neighbor)) {
//         visited.add(neighbor)
//         queue.push([neighbor, distance+1])
//       }

//     }
//   }
//   return -1
// };


const shortestPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges)
  const visited = new Set()

  
  return explore(graph, nodeA, nodeB, visited)  


};


const explore = (graph, src, target, visited) => {
  
  let queue = [[src, 0]]
  while(queue.length) {
    let [current, count] = queue.shift()
    if(current===target) return count
    visited.add(current)
    for(let neighbor of graph[current]) {
      if(!visited.has(neighbor)) {
        queue.push([neighbor, count+1])
      }
    }
  }
  return -1
}
