class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# dummy -> a -> b -> c -> d


def insert_node(head, value, index):
  dummyHead = Node(None)
  dummyHead.next = head 
  prev = None 
  curr = dummyHead
  # next = dummyHead.next  

  while index >= 0:
    prev = curr 
    curr = curr.next 
    # next = curr.next 
    index-=1

  insert = Node(value)
  prev.next = insert
  insert.next = curr

  return dummyHead.next
