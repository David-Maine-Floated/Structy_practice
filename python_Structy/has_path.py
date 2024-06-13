def has_path(graph, src, dst):
  return traverse(graph, src, dst)


def traverse(graph, src, dst):
  if src == dst: return True 

  for key in graph[src]:
    print(key)
    if traverse(graph, key, dst) == True: 
      return True 

  return False 