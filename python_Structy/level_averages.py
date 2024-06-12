from collections import deque 


# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def level_averages(root):
  if root is None: return []
  res = []
  queue = deque([root])

  while(queue):
    length = len(queue)
    count = length
    sum = 0
    while(count):
      curr = queue.popleft()
      sum += curr.val 
      if curr.left: queue.append(curr.left)
      if curr.right: queue.append(curr.right)
      count -= 1

    res.append(sum / length)

  return res 
      