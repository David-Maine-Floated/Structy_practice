const pairedParentheses = (str) => {
  let stack = []
  let i = 0;
  while(i < str.length) {
    if(str[i] === '(') {
      stack.push('(')
    } else if(str[i] === ')') {
      if(stack.length === 0) return false 
      stack.pop()
    }
    i++
  }
  if(stack.length !== 0) return false 
  return true 
  
};