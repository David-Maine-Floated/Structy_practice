const rareRouting = (n, roads) => {
  // todo
  const graph = createGraph(roads)
  const visited = new Set()
  const valid = explore(graph, "0", visited, null)
  return valid && visited.size === n;
};

const explore = (graph, node, visited, prev) => {
  
  if(visited.has(node)) return false 

  visited.add(node)

  for(let neighbor of graph[node]) {
    if(neighbor !== prev && !explore(graph, neighbor, visited, node)) return false 
      
    }
  
  return true 
}

const createGraph = (roads) => {
  const graph = {}
  for(let road of roads) {
    let [x, y] = road 
    if(!(x in graph)) graph[x] = []
    if(!(y in graph)) graph[y] = []
    graph[x].push(String(y))
    graph[y].push(String(x))
  }
  return graph 
}