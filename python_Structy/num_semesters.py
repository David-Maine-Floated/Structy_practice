def semesters_required(num_courses, prereqs):
  graph = _create_graph(prereqs, num_courses)
  print(graph)
  maxCount = 0

  for course in graph: 
    result = _traverse(graph, course)
    maxCount = max(result, maxCount)
    
  return maxCount


def _create_graph(prereqs, num_courses):
  
    graph = {i: [] for i in range(num_courses)} 
    for edge in prereqs: 
      a, b = edge   
        
      graph[a].append(b)
      
    return graph 

def _traverse(graph, start):
  
  maxCount = 0
  
  for neighbor in graph[start]:
    result = _traverse(graph, neighbor) 
    maxCount = max(result, maxCount)

  return maxCount + 1
