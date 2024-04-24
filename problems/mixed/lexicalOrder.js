const lexicalOrder = (word1, word2, alphabet) => {
  // todo
  i = 0
  while(i < word1.length || i < word2.length) {
      let val1 = alphabet.indexOf(word1[i])
      let val2 = alphabet.indexOf(word2[i])
      if(val1 < val2) return true 
      if(val2 < val1) return false 
    i++
  }
  return true 
};