// const longestPath = (graph) => {
  
//   let count = {}
  
//   for(let node in graph) {
//     if(graph[node].length === 0) {
//       count[node] = 0
//     }
//   }
  
//   for(let node in graph) {
//     explore(graph, node, count)
//   }
//   return Math.max(...Object.values(count))
// };


// const explore = (graph, node, count)=> {
//     if(count[node] !== undefined) return count[node]
  
//     let maxLength = 0
  
//     for(let neighbor of graph[node]) {
//       let result = explore(graph, neighbor, count)
      
//       maxLength = Math.max(maxLength, count[neighbor])
      
//     }
//   count[node] = maxLength+ 1
//   return count[node]
// }


const longestPath = (graph) => {
  let count = {}
  let longest = 0
  for(let node in graph) {
    if(graph[node].length === 0) count[node] = 0
  }
  
  for( let node in graph) {
      explore(graph, node, count)
      

  }
  return Math.max(...Object.values(count));
};

const explore = (graph, node, count) => {
  if(node in count) return count[node]
  
  let maxDistance = 0 
  let result;
  for(let neighbor of graph[node]) {
    result = explore(graph, neighbor, count)
    maxDistance = Math.max(result, maxDistance)
    
  }
  count[node] = maxDistance + 1
  return count[node]
}
