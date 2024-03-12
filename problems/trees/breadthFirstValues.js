const breadthFirstValues = (root) => {
  if(!root) return [] 
  const queue = [root];
  let result = []
  while(queue.length) {
    let current = queue.shift()
    result.push(current.val)
    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)
  }
  return result 
};