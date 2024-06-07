# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def longest_streak(head):
  if head is None: return 0
  count = 0
  maxCount = 0
  currVal = head.val
  while(head):
    if head.val == currVal: count += 1 
    else: 
      maxCount = max(maxCount, count)
      count = 1 
      currVal = head.val 
    head = head.next 

  return max(maxCount, count)
