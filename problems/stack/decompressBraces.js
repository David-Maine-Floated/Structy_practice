const decompressBraces = (s) => {
  // todo
  let stack = []
  let nums = '0123456789'
  let result = ''

  for(let char of s) {
    if(nums.includes(char)) {
      stack.push(Number(char))
    } else {
      if(char === '}') {
        let subStr = ''
        while(typeof stack[stack.length - 1] !== "number") {
        const popped = stack.pop()
        subStr = popped + subStr
        }
        const num = stack.pop()
        stack.push(repeat(subStr, num))
  
      } else if (char !== '{') {
        stack.push(char)
      }
    }
      
  }

 return stack.join('')
};


const repeat = (str, num) => {
  let result = ""
  for(let i = 0; i < num; i++) {
    result += str
  }
  return result 
}