
const postOrder = (root) => {
  // todo
  if(root === null) return []

  let left = postOrder(root.left)
  
  let right = postOrder(root.right)

  return [...left, ...right, root.val]
  
};