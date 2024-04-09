const lowestCommonAncestor = (root, val1, val2) => {

  let path1 = explore(root, val1)
  let path2 = explore(root, val2)

  const set2 = new Set(path2)
  for(let val of path1) {
    if(set2.has(val)) return val
  }
};

const explore = (root, val) => {
  if(root === null) return false
  if(root.val === val) return [root.val]

  let left = explore(root.left, val)
  let right = explore(root.right, val)

  if(left) return [...left,root.val]
  if(right) return [...right,root.val]
  
}
