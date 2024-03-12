const treeMinValue = (root,) => {
  if(!root) return Infinity 
  
  return Math.min(treeMinValue(root.left), treeMinValue(root.right), root.val)
  
  
};