const removeNode = (head, targetVal) => {
  if(head.val === targetVal) return head.next  
  let current = head 
  let prev = null
  while(current) {
    let next = current.next 
    
    if(current.val === targetVal) {
      prev.next = next 
      return head 
      
    }
    prev = current;
    current = current.next;
    
  }
};