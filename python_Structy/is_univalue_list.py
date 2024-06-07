# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def is_univalue_list(head, prev = None):
  if prev is not None: 
    if head is None: return True 
    if head.val != prev.val: return False 
  return is_univalue_list(head.next, head)
