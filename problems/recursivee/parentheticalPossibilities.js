const parentheticalPossibilities = (s) => {
  if(s.length === 0) return ['']

  const allPossibilities = []
  
  let {choices, leftOver} = getChoices(s)
  for(let choice of choices) {
    const remainderPossibilites = parentheticalPossibilities(leftOver)
    for(let subString of remainderPossibilites) {
      allPossibilities.push(choice + subString)
    }
  }
    
  return allPossibilities
    
};


const getChoices = (s) => {
  if(s[0] === '(') {
    let end = s.indexOf(')')
    return {
      choices: s.slice(1, end),
      leftOver: s.slice(end + 1)
    }
  } else {
    return {
      choices: s[0],
      leftOver: s.slice(1)
    }
  }
}