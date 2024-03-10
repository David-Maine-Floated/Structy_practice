const isUnivalueList = (head) => {
  if(!head.next) return true 
  if(head.val !== head.next.val) return false 
  return isUnivalueList(head.next)
};