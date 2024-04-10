const tolerantTeams = (rivalries) => {

  const graph = createGraph(rivalries)

  const visited = {}
  
  for(let node in graph) {
      if(!(node in visited)) {
        if(!explore(graph, node, visited, true)) return false 
      }
  }

  return true
};

const explore = (graph, node, visited, color) => {
  if(visited[node] !== undefined) return visited[node] === color 

  visited[node] = color 

  for(let neighbor of graph[node]) {
    if(!explore(graph, neighbor, visited, !color)) return false 
  }
  
  return true 
}


const createGraph = (rivalries) => {

  const graph = {}
    
  for(let edge of rivalries) {
    [x, y] = edge 
    if(!(x in graph)) graph[x] = []
    if(!(y in graph)) graph[y] = []
    graph[x].push(y)
    graph[y].push(x)
  }

  return graph
}
