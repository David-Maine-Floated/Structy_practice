const treeLevels = (root) => {
  if(!root) return [] 
  const stack = [[root, 0]]
  let levels = []
  
  while(stack.length) {
    let current = stack.pop()
    let currentLevel = current[1]

    if(!levels[currentLevel]) levels[currentLevel] = [];

    levels[currentLevel].push(current[0].val)

    if(current[0].left) stack.push([current[0].left, currentLevel+1])
    if(current[0].right) stack.push([current[0].right, currentLevel+1])
  
  }
    let newLevels = []
    levels.forEach(level => newLevels.push(level.reverse()))
    return newLevels
  
};