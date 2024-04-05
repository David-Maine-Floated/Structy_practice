const befittingBrackets = (str) => {
  // todo
  let stack = []
  for(let char of str) {
    switch(char) {
      case '(':
      case '{':
      case '[':
        stack.push(char)
        break;
      case ')':
        let top1 = stack.pop()
        if(top1 !== '(') return false 
        break;
      case ']':
        let top2 = stack.pop()
        if(top2 !== '[') return false 
        break;
      case '}':
        let top3 = stack.pop()
        if(top3 !== '{') return false 
        break;
    }
  }
  return stack.length === 0
};