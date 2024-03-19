const largestComponent = (graph) => {
  // todo
  let largest = 0
  let countSet = new Set()
  for(let node in graph) {
   
    let subCount = explore(graph, node, countSet)
    largest = Math.max(largest, subCount)
  }
  return largest
};


const explore = (graph, node, countSet) => {
  if(countSet.has(node)) return 0 
  
  countSet.add(node)
    
  let size = 1
  for(let neighbor of graph[node]){
    size += explore(graph,neighbor, countSet)
  }
 return size  
}