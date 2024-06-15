def largest_component(graph):
  maxCount = 0
  visited = set()
  for key in graph:
    maxCount = max(maxCount, _traverse(graph, key, visited)) 

  return maxCount

def _traverse(graph, key, visited):
  if key in visited: return 0 

  count = 1
  visited.add(key)

  for neighbor in graph[key]:
    count += _traverse(graph, neighbor, visited)

  return count 