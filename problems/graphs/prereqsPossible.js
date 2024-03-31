const prereqsPossible = (numCourses, prereqs) => {
  const graph = createGraph(prereqs, numCourses)

  const visiting = new Set()
  const visited = new Set()
  
  for(let node in graph) {
    
     if(!explore(graph, node, visiting, visited)) return false
    
  }
  return true 
  
};


const explore = (graph, node, visiting, visited) => {
  if(visiting.has(node)) return false 
  if(visited.has(node)) return true 
  
  visiting.add(node)
  console.log(graph[node], node)
  for(let neighbor of graph[node]) {
    if(!explore(graph, neighbor, visiting, visited)) return false 
  
  }

  visiting.delete(node)
  visited.add(node)
  
  return true 
  
}



const createGraph = (prereqs, numCourses) => {
  const graph = {}
  
  for(let i = 0; i < numCourses; i++) {
    graph[i] = []
  }
  for(let edge of prereqs) {
    let [x,y] = edge
    console.log(graph)
    graph[x].push(y)
    
  }

  return graph
}