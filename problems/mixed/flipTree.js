
const flipTree = (root) => {
  let head = root 

  flip(root)

  return head 
  
};

const flip = (root) => {
  if(root === null) return 

  let left = root.left 
  let right = root.right 

  root.left = right 
  root.right = left 

  flip(root.left)
  flip(root.right)
} 