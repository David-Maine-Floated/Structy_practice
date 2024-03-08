const linkedListValues = (head) => {
  // todo
  let result = [];
  while(head) {
    result.push(head.val)
    head = head.next
  }
  return result
};

module.exports = {
  linkedListValues,
};