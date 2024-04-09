const middleValue = (head) => {
  // todo
  let result = []
  while(head !== null) {
    result.push(head.val) 
    head = head.next
  }

  let mid = Math.floor(result.length/2)
  return result[mid]
};