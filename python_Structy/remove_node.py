class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def remove_node(head, target_val):
  dummyHead = Node(None)
  dummyHead.next = head
  prev = dummyHead
  next = head.next 
  while head: 
    if head.val == target_val:
      prev.next = next 
      return dummyHead.next
    prev = head 
    head = head.next 
    next = head.next 
    