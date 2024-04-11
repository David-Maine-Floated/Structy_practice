const positioningPlants = (costs, pos = 0, prev = null, memo = {}) => {
  let key = pos + ',' + prev          
  if(key in memo) return memo[key]
  if(pos === costs.length) return 0

  const currentRow = costs[pos] // [4,3,7]
  let min = Infinity
  
  for(let i=0; i < currentRow.length; i++) {
    if(i !== prev) {
      let cost = currentRow[i] + positioningPlants(costs, pos+1, i, memo) // 4 + (costs, 1, 0)
    min = Math.min(min, cost)
      
    }
  }

  memo[key] = min
  return min
};