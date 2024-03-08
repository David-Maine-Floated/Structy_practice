const sumList = (head) => {
  // todo
  if(!head) return 0

  return head.val + sumList(head.next)
};