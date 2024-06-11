from collections import deque


# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_levels(root):
  if root is None: return []
  queue = deque([[root, 0]])
  res = []
  while(queue):
    curr, level = queue.popleft()
    
    if len(res) == level: res.append([])
      
    res[level].append(curr.val)
    if curr.left: queue.append([curr.left, level + 1])
    if curr.right: queue.append([curr.right, level + 1])

  return res