
const nestingScore = (str) => {
  let stack = [0]
  for(let char of str) {
    if(char === '[') {
      stack.push(0)
    } else {
      let top = stack.pop()
      if(top === 0) {
        stack[stack.length - 1] += 1
      } else {
        stack[stack.length - 1] += 2 * top
      }
    }
    
  }
  return stack[0]
}