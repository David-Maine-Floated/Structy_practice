const linkedListCycle = (head) => {
  let nodes = new Set()

  while(head !== null) {
    if(nodes.has(head.val)) return true
    nodes.add(head.val)
    head = head.next
  }
  return false
};