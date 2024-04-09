const substituteSynonyms = (sentence, synonyms) => {

  const words = sentence.split(' ')
  const subArrays = generate(words, synonyms)

  const result = []
  for(let subArray of subArrays) {
    result.push(subArray.join(' '))
  }
  return result 
};

const generate = (words, synonyms) => {
  if(words.length === 0) return [[]];

  let first = words[0]
  let theRest = words.slice(1)

  let subArrays = generate(theRest, synonyms);

  if(first in synonyms) {
      let result = []
    for(let synonym of synonyms[first]) {
      for(array of subArrays) {
        result.push([synonym, ...array])
      }
    }
      return result 
    
  } else {
    let result = []
    for(array of subArrays) {
      result.push([first, ...array])
    }
    return result 
  }
}
  