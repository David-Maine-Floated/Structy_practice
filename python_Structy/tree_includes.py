# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_includes(root, target):
  if root is None: return False 
  if root.val == target: return True 
  res_left = tree_includes(root.left, target)
  res_right = tree_includes(root.right, target)

  return res_left or res_right