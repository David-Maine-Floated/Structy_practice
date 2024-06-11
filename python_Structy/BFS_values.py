from collections import deque
# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def breadth_first_values(root):
  if root is None: return []
  queue = deque([root])
  res = []
  while(queue):
    curr = queue.popleft()
    res.append(curr.val)
    if(curr.left): queue.append(curr.left)
    if(curr.right): queue.append(curr.right)
  return res