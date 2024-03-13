const levelAverages = (root) => {
  // todo
  let levels = []
  getLevels(root, levels, 0)
  
  let result = []
  
  levels.forEach(level => {
    let count = 0;
    level.forEach(num => count+=num)
    result.push(count/level.length)
  })
  
  return result
};


const getLevels = (root, levels, levelNum) => {
  if(!root) return  
  if(!levels[levelNum]) levels.push([root.val])
  else levels[levelNum].push(root.val)
  
  getLevels(root.left, levels, levelNum+1)
  getLevels(root.right, levels, levelNum+1)
  

}
