// const connectedComponentsCount = (graph) => {
//   // todo
//   const countSet = new Set();
//   let count = 0;
//   for(let node in graph) {
//     if (explore(graph,node, countSet)) count++
//   }
  
  
//   return count 
// };

// const explore = (graph, node, countSet) => {
//   if(countSet.has(String(node))) return false  
//   countSet.add(String(node))
//   for(let neighbor of graph[node]) {
//     explore(graph, neighbor, countSet)
//   }
//   return true;
// }


const connectedComponentsCount = (graph) => {
  // todo
  let count = 0
  let visited = new Set()
  for(let node in graph) {
      if(explore(graph, node, visited) === true) {
        count++ 
    }
  }
  return count 
}

const explore = (graph, node, visited) => {
  console.log(visited)
  if(visited.has(String(node))) return false    
  visited.add(String(node)) 
  
  for(let neighbor of graph[node]) {
    explore(graph, neighbor, visited)
  }
  
  return true  
}


const connectedComponentsCount = (graph) => {
  // todo
  let count = 0
  let visited = new Set()
  for(let node in graph) {
      if(explore(graph, node, visited) === true) {
        count++ 
    }
  }
  return count 
}

const exploreIterativley = (graph, node, visited) => {
  if(visited.has(String(node))) return false 
  let stack = [node]
  while(stack.length) {
    let current = stack.pop()
    visited.add(String(current))
    for(let neighbor of graph[current]) {
      if(!visited.has(String(neighbor))) {
        stack.push(String(neighbor))
      }
    }
  }
  return true  
}