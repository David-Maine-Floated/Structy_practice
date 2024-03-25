// const largestComponent = (graph) => {
//   // todo
//   let largest = 0
//   let countSet = new Set()
//   for(let node in graph) {
   
//     let subCount = explore(graph, node, countSet)
//     largest = Math.max(largest, subCount)
//   }
//   return largest
// };


// const explore = (graph, node, countSet) => {
//   if(countSet.has(node)) return 0 
  
//   countSet.add(node)
    
//   let size = 1
//   for(let neighbor of graph[node]){
//     size += explore(graph,neighbor, countSet)
//   }
//  return size  
// }

const largestComponent = (graph) => {
  let visited = new Set()
  let max = 0
  for(let node in graph) {
    let result = explore(graph, node, visited)
    max = Math.max(result, max)
    
  }
  return max 
  
};


//visited: 0, 8, 5  

const explore = (graph, node, visited) => {
  if(visited.has(String(node))) return 0 
  
  visited.add(String(node))
  
  let size = 1
  for(let neighbor of graph[node]) {
    if(!visited.has(String(node))) {
      size += explore(graph, neighbor, visited) 
    }
  }
  return size 
}



//visited: 0, 8, 5  

const exploreIterativley = (graph, node, visited) => {
  
  let stack = [node];
  let size = 0;
  while(stack.length) {
    let current = stack.pop()
    if(visited.has(current)) continue 
    size++
    visited.add(current) 
      for(let neighbor of graph[current]) {
        stack.push(neighbor)
      }
    }
  return size
}