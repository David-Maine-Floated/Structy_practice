const zipperLists = (head1, head2) => {
  
  let count = 0
  const head = head1
  let prev = head1 
  head1 = head1.next 


  while(head1 !== null && head2 !== null) {

    if(count % 2 !== 0) {

      prev.next = head1  
      head1 = head1.next 
      
    } else {

      prev.next = head2
      head2 = head2.next   
    }
    count++
    prev = prev.next 
    
  }
  prev.next = head1 || head2
  return head
};