
const linkedPalindrome = (head) => {
  let result = ''

  while(head !== null) {
    result += head.val 
    head = head.next
  }


  return result === result.split("").reverse().join('')
};
