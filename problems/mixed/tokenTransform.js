const tokenTransform = (s, tokens) => {

  let result = []
  let i = 0
  let j = i + 1
  
  while(i < s.length ) { 
      if(s[i] !== '$') result.push(s[i])
      else {
        while(s[j]!== '$') {
          j++
        }
        let key = s.slice(i, j+1)
        let subString = tokens[key]
        let subResult = tokenTransform(subString, tokens)
        tokens[key] = subResult
        result.push(subResult)
        i = j 
      }
      i++ 
      j = i + 1
  }
  return result.join('') 
};