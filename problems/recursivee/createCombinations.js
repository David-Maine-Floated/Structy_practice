const createCombinations = (items, k) => {
  if(k === 0) return [[]]
  if( k > items.length) return []
  
  const first = items[0]

  const partialCombos = createCombinations(items.slice(1), k-1) 
  const combostWithoutFirst = createCombinations(items.slice(1), k)


  const combosWithFirst = []
  for(let partialCombo of partialCombos) {
    combosWithFirst.push([first, ...partialCombo])
  }

  return [...combostWithoutFirst, ...combosWithFirst]
  

};
