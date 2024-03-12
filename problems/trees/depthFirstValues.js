const depthFirstValues = (root) => {
  // todo
  if(root === null) return []
  

  const left = depthFirstValues(root.left)
  const right = depthFirstValues(root.right)

  
  return [root.val, ...left, ...right]
  
};



const depthFirstValues2 = (root) => {
  // todo
  if(!root) return []
  const stack = [root]
  const result= []
  
  while(stack.length) {
    let current = stack.pop()
    result.push(current.val)
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)  
  }
  
  return result 
};
