# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# a -> b -> c -> d -> e -> f
# prev = a 
# head = b
# next = c 

def reverse_list(head):
  prev = None

  
  while head: 
    print(head.val)
    next = head.next #re-assign things for return 
    head.next = prev 
      
    prev = head  # re assign variables for next loop
    head = next 
    
  return prev 