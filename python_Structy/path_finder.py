# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def path_finder(root, target):
  result = _path_finder(root, target)
  if result is None: return None 
  return result[::-1]

def _path_finder(root, target):
  if root is None: return None
  if root.val == target: return [root.val ]


  leftPath = _path_finder(root.left, target)
  rightPath = _path_finder(root.right, target)

  if leftPath: 
      leftPath.append(root.val)
      return leftPath
  if rightPath: 
      rightPath.append(root.val)
      return rightPath 
  return None
      