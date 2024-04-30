const subsets = (elements) => {
  if(elements.length === 0) return [[]]


  let first = elements[0]
  const remaining = elements.slice(1)
  const withoutFirst = subsets(remaining)
  const withFirst = withoutFirst.map(sub => [first, ...sub])
  return [...withoutFirst, ...withFirst]
};