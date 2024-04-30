const decompressBraces = (s) => {
  let stack = []
  const nums = '123456789'

  for(let i = 0; i < s.length; i++) {
    if(nums.includes(s[i])) {
      stack.push(Number(s[i]))
    } else if(s[i] === '}') {
      let segment = ''
      while(typeof stack[stack.length - 1] !== 'number') {
        const popped = stack.pop();
        segment = popped + segment;
      }
      let count = stack.pop()
      let fullSegment = repeat(count, segment)
      stack.push(fullSegment)
      //
    } else if (s[i] !== '{') {
      stack.push(s[i])
    }   
  }
  return stack.join('')
}

const repeat = (count, segment) => {
  let result = '';
  while(count > 0) {
    result += segment;
    count--
  }
  return result
}      