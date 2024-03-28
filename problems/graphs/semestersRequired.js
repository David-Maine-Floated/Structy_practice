
const semestersRequired = (numCourses, prereqs) => {
  const graph = createGraph(prereqs, numCourses);
  let count = {} 
  
  for(let node in graph) {
    if(graph[node].length === 0) count[node] = 1 
  }
  
  for(let node in graph) {
    explore(graph, node, count)
  }
  
  return Math.max(...Object.values(count))
  
};

function explore(graph, node, count) {
  if (count[node]) return count[node] 
  // Base case: no prerequisites
  let max = 0;
  for (let neighbor of graph[node]) {
    let result = explore(graph, neighbor, count); // Increment depth by 1
    max = Math.max(result, max);
  }
  
  count[node] = max + 1
  return count[node]
}

function createGraph(prereqs, numCourses) {
  let graph = {};
  
  for(let i = 0; i < numCourses; i++) {
    graph[i] = []
  }
  for (let edge of prereqs) {
    let [x, y] = edge;
    graph[x].push(y); // Fix: Push y, not x
  }
  return graph;
}