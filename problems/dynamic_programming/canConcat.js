const canConcat = (s, words, memo ={}) => {
  if(s in memo) return memo[s]
  if(s === "") return true;

  for(let word of words) {
    console.log(word)
    if(s.startsWith(word)) {
      let suffix = s.slice(word.length)
      if(canConcat(suffix, words, memo)) {
  
        return true 
      }
    }
  }
  memo[s] = false 
  return false 
}