def longest_path(graph):
  maxEdges = 0
  counts = {}
  
  for node in graph:
    result = _traverse(graph, node, counts)
    maxEdges = max(result, maxEdges)

  return maxEdges



def  _traverse(graph, node, counts):
  if node in counts: return counts[node]
  maxEdges = 0

  for neighbor in graph[node]:
    result = _traverse(graph, neighbor, counts) + 1
    maxEdges = max(result, maxEdges)
    
  counts[node] = maxEdges
  return maxEdges