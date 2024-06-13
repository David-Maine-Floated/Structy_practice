def undirected_path(edges, node_A, node_B):
  graph = create_graph(edges)

  return _traverse(graph, node_A, node_B, set())


  # if _traverse(graph, node_B, node_A):
  #   return True 

  return False


def _traverse(graph, src, dest, visited):
  if src == dest: return True

  if src in visited: return False
  
  visited.add(src)

  for neighbor in graph[src]:
    if _traverse(graph, neighbor, dest, visited): return True 

  return False 



def create_graph(edges):
  graph = {}

  for edge in edges: 
    x, y = edge 

    if x not in graph: graph[x] = []
    if y not in graph: graph[y] = []
    graph[x].append(y)
    graph[y].append(x)

  return graph 