const shortestPath = (edges, nodeA, nodeB) => {
  
  let graph = buildGraph(edges)
  let queue = [[nodeA, 0]]
  let visited = new Set([nodeA])

  while(queue.length) {

    let [current, distance] = queue.shift()

    if(current === nodeB) return distance 
    for(let neighbor of graph[current]) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance+1])
      }

    }
  }
  return -1
};
