class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# a -> b -> c -> d -> e -> f
# x -> y -> z

def zipper_lists(head_1, head_2):
  dummyHead = Node(None)
  curr = dummyHead
  while(head_1 and head_2):  # head_1 = b head_2 = y 
    next1 = head_1.next   #c
    next2 = head_2.next   #y
    curr.next = head_1    #curr.next = b
    curr = curr.next      # curr = c 
    curr.next = head_2    # curr.next = y 
    curr = curr.next      # curr = y 
                          # list: dummyHead -> a -> x - > b -> y
    head_1 = next1        # head_1 = c
    head_2 = next2        # head_2 = y

  if head_1: curr.next = head_1
  if head_2: curr.next = head_2 

  return dummyHead.next