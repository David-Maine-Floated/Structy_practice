const allTreePaths = (root) => {
  if(!root) return []
  if(!root.left && !root.right) return [[root.val]]
  
  const paths = []
  
  let left = allTreePaths(root.left)
  left.forEach(path => paths.push([root.val, ...path]))
  let right = allTreePaths(root.right)
  right.forEach(path => paths.push([root.val, ...path]))
  
  
  return paths 
}