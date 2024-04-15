const combineIntervals = (intervals) => {
  // todo
  const sorted = intervals.sort((x,y) => y[0] - x[0] )

  let result = []
  let subResult = sorted.pop()
  
  while(sorted.length > 0) {
    let current = sorted.pop();
    console.log('current', current, 'sub', subResult)
    if(subResult[1] >= current[0]) {
      if(subResult[1] < current[1]){
        subResult[1] = current[1]  
      }
    } else {
      result.push(subResult)
      subResult = current
    }  
  }
  result.push(subResult)
  return result
};