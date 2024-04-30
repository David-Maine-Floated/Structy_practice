const permutations = (items) => {
  if(items.length === 0) return [[]]
  
  const first = items[0];
  const remainder = items.slice(1);

  const withoutFirst = permutations(remainder) // [[b,c], [c,b]]

  const withFirst = []
  console.log(withoutFirst)
  for(let perm of withoutFirst) {
    let i = 0;
    while(i <= perm.length) {
      let firstHalf = perm.slice(0, i) 
      let secondHalf = perm.slice(i)
      withFirst.push([...firstHalf, first, ...secondHalf])
      i++
    }
  }
  return withFirst
  
}