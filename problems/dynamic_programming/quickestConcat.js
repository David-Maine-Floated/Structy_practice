const quickestConcat = (s, words) => {
  let result = explore(s, words)
  
    if(result === Infinity) return -1
    return result


}

const explore = (s, words, memo= {}) =>{
  
  if(s in memo) return memo[s]
  if(s === "") return 0

  let count = Infinity
  
  for(let word of words) {
   if(s.startsWith(word)) {
     let suffix = s.slice(word.length)
     let attempt = 1 + explore(suffix, words, memo)
     count = Math.min(count, attempt)
   }
  }
  memo[s] = count
  return count
};