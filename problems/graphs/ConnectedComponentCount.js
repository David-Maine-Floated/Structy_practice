const connectedComponentsCount = (graph) => {
  // todo
  const countSet = new Set();
  let count = 0;
  for(let node in graph) {
    if (explore(graph,node, countSet)) count++
  }
  
  
  return count 
};

const explore = (graph, node, countSet) => {
  if(countSet.has(String(node))) return false  
  countSet.add(String(node))
  for(let neighbor of graph[node]) {
    explore(graph, neighbor, countSet)
  }
  return true;
}