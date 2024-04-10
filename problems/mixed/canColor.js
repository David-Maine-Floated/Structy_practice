const canColor = (graph) => {

  let visited = {}

  for(let node in graph) {
    // if(!(node in visited)) {
    if(explore(graph, node, visited, true) === false ) return false 
      
    // }
    
  }

  return true
  
};


const explore = (graph, node, visited, color) => {
  
   if(visited[node] !== undefined) {
     if(visited[node] !== color) return false 
     else return 
   }

  visited[node] = color 
  
  for(let neighbor of graph[node]) {
    if(explore(graph, neighbor, visited, !color) === false) return false 
  }
   return true 
}