const subsets = (elements) => {
  if(elements.length === 0) return [[]]

  const first = elements[0]

  let withoutFirst = subsets(elements.slice(1)) // [[],[b]]

  let withFirst = []
  for (let sub of withoutFirst) {
    withFirst.push([...sub, first])
  }

  return withoutFirst.concat(withFirst)
  
};