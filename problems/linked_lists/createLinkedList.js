const createLinkedList = (values) => {
  if(!values.length) return null 
  let head;
  let prev = null 
  for(let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i])
    if(i === 0) head = newNode
    if(i !==0) prev.next = newNode 
    prev = newNode 
  }
  return head 
};
