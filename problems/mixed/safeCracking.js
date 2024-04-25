}
// {
//   7: [1, 8]
//   1: [8]
//   8: []
//}

const topologicalOrder = (graph) => {
  const numParents = {};

  for(let node in graph) {
    numParents[node] = 0;
  }


  for(let node in graph) {
    for(let child of graph[node]) {
      numParents[child] += 1;
    }
  }

  let ready = []
  for(let node in numParents) {
    if(numParents[node] === 0) ready.push(node);
  }

  let order = ''
  while(ready.length) {
    let node = ready.pop()
    order += node;
    for(let child of graph[node]) {
      numParents[child] -= 1 
      if(numParents[child] === 0) ready.push(child)
    }
  }
  return order
}

const createGraph = (hints) => {
  const graph = {};

  for(let edge of hints) {
    let [x,y] = edge; 
    if(!graph[x]) graph[x] = [];
    if(!graph[y]) graph[y] = []
    graph[x].push(y)
  }
  return graph 
}
module.exports = {
  safeCracking,
};