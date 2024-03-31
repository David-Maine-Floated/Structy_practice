const hasCycle = (graph) => {
  const visiting = new Set();
  const visited = new Set()
  for(let node in graph) {
    if(explore(graph, node, visiting, visited)) return true 
    
  }
  return false 
  
};


const explore = (graph, node, visiting, visited) => {
  if(visited.has(node)) return false 
  if(visiting.has(node)) return true
  
  visiting.add(node)
  for(let neighbor of graph[node]) {
    if(explore(graph, neighbor, visiting, visited)) return true 
  
  }
  
  
  visiting.delete(node)
  visited.add(node)
  
  return false 
  
}