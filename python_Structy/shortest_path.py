def shortest_path(edges, node_A, node_B):
  graph = _create_graph(edges)
  print(graph)

  result = _traverse(graph, node_A, node_B, set())
  if result == float('inf'): return -1 
  return result



def _traverse(graph, start, finish, visited):
  if start in visited: return float('inf')
  if start == finish: return 0

  visited.add(start)
  count = float('inf')

  for neighbor in graph[start]:
    count = min(_traverse(graph, neighbor, finish, set(visited)) + 1, count)

  return count
  

  

def _create_graph(edges):
  graph = {}

  for edge in edges: 
    x, y = edge 
    if x not in graph: graph[x] = []
    if y not in graph: graph[y] = []
    graph[x].append(y)
    graph[y].append(x)

  return graph