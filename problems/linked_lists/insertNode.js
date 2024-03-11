const insertNode = (head, value, index) => {
  // todo
  if(index === 0) {
    let newNode = new Node(value)
      newNode.next = head  
      return newNode
  }
  if(index === 1) {
    const next = head.next 
    let newNode = new Node(value)
    head.next = newNode
    newNode.next = next 
  }
  insertNode(head.next, value, index - 1 )
  return head 

};