const depthFirstValues = (root) => {
  // todo
  if(root === null) return []
  

  const left = depthFirstValues(root.left)
  const right = depthFirstValues(root.right)

  
  return [root.val, ...left, ...right]
  
};