class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def create_linked_list(values, i = 0):
  if i == len(values): return None
  node = Node(values[i])
  node.next = create_linked_list(values, i+1)
  return node