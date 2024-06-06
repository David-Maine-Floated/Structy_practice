
def linked_list_find(head, target):
  while(head):
    if head.val == target: return True 
    head = head.next
  return False
