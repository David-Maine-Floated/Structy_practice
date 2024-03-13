const leafList = (root) => {
  // todo
  if(!root) return []
  let listy = []
  getLeafs(root, listy)
  
  return listy 
};

const getLeafs = (root, list) => {
  if(!root.left && !root.right) list.push(root.val)
  
  if(root.left) getLeafs(root.left, list)
  if(root.right) getLeafs(root.right, list)

}
