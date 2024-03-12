
const howHigh = (node) => {
  // todo
  if(!node) return -1;
  
  let left = howHigh(node.left) + 1 
  let right = howHigh(node.right) + 1 
  
  return Math.max(left, right)
};

module.exports = {
  howHigh,
};
