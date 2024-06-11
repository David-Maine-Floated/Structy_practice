# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_value_count(root, target):
  if root is None: return 0 
  count = 0
  if root.val == target: count += 1
  count += tree_value_count(root.left, target)
  count += tree_value_count(root.right, target)

  return count