const getNodeValue = (head, index) => {
  if (index === 0) return head.val 
  return getNodeValue(head.next, index - 1)
};

module.exports = {
  getNodeValue,
};