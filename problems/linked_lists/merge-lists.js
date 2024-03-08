const mergeLists = (head1, head2) => {
  const dummyHead = new Node(-1)
  let current = dummyHead
  
  while(head1 && head2) {
    if(head1.val < head2.val) {
      current.next = head1
      head1 = head1.next
      
    } else {
      current.next = head2
      head2 = head2.next 
    }
    current = current.next 
  }
  
  current.next = head1 || head2
  return dummyHead.next
};
