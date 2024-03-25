// const undirectedPath = (edges, nodeA, nodeB) => {
//   let graph = createGraph(edges);
//   console.log(graph)
//   return path(graph, nodeA, nodeB, new Set())
  
// }

// const path = (graph, src, dst, visited) => {
//   if(src === dst) return true 
//   if(visited.has(src)) return false  
  
//   visited.add(src)
//   for(let neighbor of graph[src]) {
//     if(path(graph, neighbor, dst, visited)) return true 
//   }
   
//   return false 
// }
  
// const createGraph = (edges) => {
//   const graph = {}
  
//   for(let edge of edges) {
//     const [a, b] = edge;
//     if(!(a in graph)) graph[a] = []  
//     if(!(b in graph)) graph[b] = [] 
//     graph[a].push(b)
//     graph[b].push(a)
//   }
//   return graph
// }



const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges)
  return path(graph, nodeA, nodeB, new Set()) 
      
}

const path = (graph, src, dst, visited) => {
  
  let stack = [src]
  while(stack.length ) {
    let currentNode = stack.pop()
    if(currentNode === dst) return true  
    for(let neighbor of graph[currentNode]) {
      if(!visited.has(neighbor)) {
        stack.push(neighbor)
        visited.add(neighbor)
      }
    }
  }
  return false  
}
  
const createGraph = (edges) => {
  const graph = {} 
  for (let edge of edges) {
    const [x,y] = edge 
    if(!graph[x]) graph[x] = []
    graph[x].push(y)
    
    if(!graph[y]) graph[y] = []
    graph[y].push(x)
  }
  return graph
}




const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges)
  return path(graph, nodeA, nodeB, new Set()) 

}

// const path = (graph, src, dst, visited) => {
//   let stack = [src]
//   while(stack.length ) {
//     let currentNode = stack.pop()
//     if(currentNode === dst) return true  
//     for(let neighbor of graph[currentNode]) {
//       if(!visited.has(neighbor)) {
//         stack.push(neighbor)
//         visited.add(neighbor)
//       }
//     }
//   }
//   return false  
// }

const path = (graph, src, dst, visited) => {
  if(src === dst) return true  
  if(visited.has(src)) return false
  visited.add(src)
  for(let neighbor of graph[src]) {
      if(path(graph, neighbor, dst, visited)) return true 
    }

  
  return false
}
  
const createGraphRecursive = (edges) => {
  const graph = {} 
  for (let edge of edges) {
    const [x,y] = edge 
    if(!graph[x]) graph[x] = []
    graph[x].push(y)
    
    if(!graph[y]) graph[y] = []
    graph[y].push(x)
  }
  return graph
}
  
  