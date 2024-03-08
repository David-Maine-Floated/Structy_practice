const linkedListFind = (head, target) => {
  // todo
  if(!head) return false
  if(head.val === target) return true  
  return linkedListFind(head.next, target)
};