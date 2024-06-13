def connected_components_count(graph):
  visited = set()

  count = 0
  for key in graph:
    count += _traverse(graph, key, visited)

  return count 

def _traverse(graph, start, visited):
  if start in visited: return 0

  visited.add(start)

  for neighbor in graph[start]:
    _traverse(graph, neighbor, visited)
  

  return 1