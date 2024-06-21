def island_count(grid):

  visited = set()
  maxCount = 0
  
  for r in range(len(grid)):
    for c in range(len(grid[0])):
      if _traverse(grid, r, c, visited): maxCount +=1

  return maxCount


def _traverse(grid, r, c, visited):
  if not _inBounds(grid, r, c): return False
  pos = f"{r},{c}"
  if pos in visited: return False

  visited.add(pos)
  if grid[r][c] == "W": return False

  
  _traverse(grid, r + 1, c, visited) 
  _traverse(grid, r - 1, c, visited) 
  _traverse(grid, r, c + 1, visited) 
  _traverse(grid, r, c - 1, visited) 
    
  return True 
  

def _inBounds(grid,r,c):
  if r < 0 or r >= len(grid): return False 
  if c < 0 or c >= len(grid[0]): return False 
  return True