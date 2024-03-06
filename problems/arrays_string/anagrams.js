const anagrams = (s1, s2) => {
  const count = {}
  for(let char of s1) {
    if(!count[char]) count[char] = 1
    else count[char] +=1
  }
  for(let char of s2) {
    if(!count[char]) return false 
    else count[char] -=1
  }
  
  for(let result in count) {
    if(count[result] !== 0) return false 
    
  }
  return true 
};

module.exports = {
  anagrams,
};