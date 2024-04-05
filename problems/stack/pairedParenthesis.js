const pairedParentheses = (str) => {
  // todo
  let stack = []
  for (let char of str) {
    switch(char) {
      case '(':
        stack.push('(');
        break;
      case ')':
        console.log(stack)
        let top = stack.pop()
        if(top !== '(') return false 
        break;
    }   
  }
  if(stack.length) return false 
  return true 
};