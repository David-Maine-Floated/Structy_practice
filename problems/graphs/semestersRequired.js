const semestersRequired = (numCourses, prereqs) => {
  if(!prereqs.length) return 1
  // todo 
  let graph = createGraph(numCourses, prereqs)
  console.log(graph)
  let count = {}
  let max = 0
  for(let node in graph) {
    let result = explore(graph, node, count)
    max = Math.max(max, result)
  }
  return max 
};


function explore(graph, node, count) {
  
  if(!graph[node].length) return 0 
  if(count[node]) return count[node]
  
  let semesters = 1
  for(let neighor of graph[node]) {
    let result = explore(graph, neighor, count)
    semesters = Math.max(result, semesters)
  }
    
  count[node] = semesters + 1
  return count[node]
}

function createGraph(numcourses, prereqs) {
  let graph = {}
  for(let pair of prereqs) {
    [a,b] = pair 
    if(!graph[b]) graph[b] = [];
    graph[b].push(a)
  }
  for(let i = 0; i < numcourses; i++) {
    if(!graph[i]) graph[i] = []
    
  }
  return graph  
}