const parentheticalPossibilities = (s) => {
  if(s.length === 0) return [''];
  
  const result = []
  
  const {choices, remainder} = getChoices(s)
  for(let choice of choices) {
    let endStringChoices = parentheticalPossibilities(remainder)
    for(let endString of endStringChoices) {
      result.push(choice + endString)
    }
  }
  return result 
};


const getChoices = (s) => {
  if(s[0] === '(') {
    let end = s.indexOf(')')
    const choices = s.slice(1, end);
    const remainder = s.slice(end + 1);
    return {
      choices: choices,
      remainder: remainder
    }
    
  } else {
    return {
      choices: s[0],
      remainder: s.slice(1)
    }
  }
}
