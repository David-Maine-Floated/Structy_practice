const detectDictionary = (dictionary, alphabet) => {
  for(let i = 0; i < dictionary.length - 1; i++) {
    let current = dictionary[i]
    let next = dictionary[i+1]
    if(!ordered(current, next, alphabet)) return false 
  }
  return true 
};

const ordered = (current, next, alphabet) => {
  let leng = Math.max(current.length, next.length)
  for(let i = 0; i < leng; i++) {
    let val1 = alphabet.indexOf(current[i])
    let val2 = alphabet.indexOf(next[i])
    if(val2 < val1) return false 
    if(val1 < val2) return true 
  }
  return true 
}