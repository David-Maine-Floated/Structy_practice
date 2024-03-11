const addLists = (head1, head2) => {
  // todo
  let num1 = [];
  let num2 = []
  
  while(head1) {
    num1.unshift(head1.val.toString())
    head1 = head1.next
  }
  while(head2) {
    num2.unshift(head2.val.toString())
    head2 = head2.next
  }
  
  num1 = num1.join('')
  num2 = num2.join('')
  let sum = Number(num1) + Number(num2)
  sumString = sum.toString()
  
  let head;
  let prev = null
  for(let i = sumString.length - 1; i >= 0; i--) {
    let currentNum = Number(sumString[i])
    let newNode = new Node(currentNum)
    if(i === sumString.length - 1) head = newNode 
    if(i !== sumString.length - 1) prev.next = newNode 
    prev = newNode 
  }
  return head 
  
};