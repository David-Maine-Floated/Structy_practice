const isBinarySearchTree = (root) => {
  let order = [];
  traverseTree(root, order)
  return isSorted(order)
};


const traverseTree = (root, order) => {
  if(root === null) return 
  traverseTree(root.left, order)
  order.push(root.val)
  traverseTree(root.right, order)

  return order 
}

const isSorted = (order) => {
  for(let i = 1; i < order.length - 1; i++) {
    if(order[i] <= order[i-1]) return false 
  }

  return true 
}