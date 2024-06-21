def minimum_island(grid):

  visited = set()
  minCount = float('inf')
  
  for r in range(len(grid)):
    for c in range(len(grid[0])):
      result = _traverse(grid, r, c, visited)
      print(result)
      if result > 0: minCount = min(minCount, result)

  return minCount


def _traverse(grid, r, c, visited):
  if not _inBounds(grid, r, c): return 0
  pos = f"{r},{c}"
  if pos in visited: return 0 

  visited.add(pos)
  if grid[r][c] == "W": return 0

  
  return (_traverse(grid, r + 1, c, visited) +
    _traverse(grid, r - 1, c, visited) +
    _traverse(grid, r, c + 1, visited) +
    _traverse(grid, r, c - 1, visited) +
    + 1)



def _inBounds(grid,r,c):
  if r < 0 or r >= len(grid): return False 
  if c < 0 or c >= len(grid[0]): return False 
  return True