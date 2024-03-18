const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = createGraph(edges);
  console.log(graph)
  return path(graph, nodeA, nodeB, new Set())
  
}

const path = (graph, src, dst, visited) => {
  if(src === dst) return true 
  if(visited.has(src)) return false  
  
  visited.add(src)
  for(let neighbor of graph[src]) {
    if(path(graph, neighbor, dst, visited)) return true 
  }
   
  return false 
}
  
const createGraph = (edges) => {
  const graph = {}
  
  for(let edge of edges) {
    const [a, b] = edge;
    if(!(a in graph)) graph[a] = []  
    if(!(b in graph)) graph[b] = [] 
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}
  