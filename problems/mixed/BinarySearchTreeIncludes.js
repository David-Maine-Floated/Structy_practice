const binarySearchTreeIncludes = (root, target) => {
  if(root === null) return false 
  if(root.val === target) return true 
  if(root.val > target) {
    return binarySearchTreeIncludes(root.left, target)
  } else {
    return binarySearchTreeIncludes(root.right, target)
  }
};