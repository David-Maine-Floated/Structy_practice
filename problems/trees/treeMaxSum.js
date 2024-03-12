const maxPathSum = (root) => {
  if(!root) return -Infinity
  if (root.left === null && root.right === null) return root.val
  
  let left = root.val + maxPathSum(root.left)
  let right = root.val + maxPathSum(root.right)
  
  return Math.max(left, right)
};