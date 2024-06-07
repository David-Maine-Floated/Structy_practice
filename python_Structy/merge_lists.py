class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def merge_lists(head_1, head_2):
  dummyHead = Node(None)
  curr = dummyHead 
  while(head_1 and head_2):
    if head_1.val < head_2.val: 
      curr.next = head_1 
      head_1 = head_1.next
    else: 
      curr.next = head_2 
      head_2 = head_2.next 

    curr = curr.next

  if head_1: curr.next = head_1
  if head_2: curr.next = head_2

  return dummyHead.next