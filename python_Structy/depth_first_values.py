# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def depth_first_values(root):
  if root is None: return []


  left = depth_first_values(root.left)
  right = depth_first_values(root.right)

  return [root.val, *left, *right] 

  