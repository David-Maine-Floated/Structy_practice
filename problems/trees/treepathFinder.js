const pathFinder = (root, target) => {
    let result = pathFinderHelper(root, target)
    if(result === null) return null 
    return result.reverse()
  
  
}

const pathFinderHelper = (root, target) => {
  // todo
  if(!root) return null 
  if(root.val === target) return [root.val]
  let left = pathFinderHelper(root.left, target) // null
  let right = pathFinderHelper(root.right, target) // [e]

  if(left !== null) {
      left.push(root.val)
      return left
  }
    
  if(right !== null) {
    right.push(root.val) 
    return right
  }
  
  return null 
};