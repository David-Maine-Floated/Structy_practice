// const createCombinations = (items, k) => {
//   if(k === 0) return [[]]
//   if(k > items.length) return []

//   const first = items[0]

//   let itemsWithFirst = []
//   let addToFirst = createCombinations(items.slice(1), k-1)

//   for(let item of addToFirst) {
//     itemsWithFirst.push([first, ...item])
//   }

//   let noFirst = createCombinations(items.slice(1), k)

//   return [...itemsWithFirst, ...noFirst]
// };


const x = 2; 
let y = 4;

function update(arg) { 
  return Math.random() + y * arg; 
} 
y = 2; 
y = 3
result = update(x); 
console.log(result)