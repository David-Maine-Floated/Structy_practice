# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def linked_list_values(head):
  result = []
  while head: 
    result.append(head.val)
    head = head.next 
  return result