const treeSum = (root) => {
  // todo
  if(!root) return 0 
    
  let left = treeSum(root.left)
  let right = treeSum(root.right)
  
  return root.val + left + right
};