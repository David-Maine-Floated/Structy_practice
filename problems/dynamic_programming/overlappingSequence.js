const overlapSubsequence = (str1, str2, i=0, j=0, memo= {}) => {
  let pos = i + ',' + j 
  if(pos in memo) return memo[pos]
  if(i > str1.length - 1 || j > str2.length - 1 ) return 0;

  let result = 0
  if(str1[i] === str2[j]) {
       result = overlapSubsequence(str1, str2, i+1, j+1, memo) + 1  
  } else {
     result = Math.max(
      overlapSubsequence(str1, str2, i+1, j, memo),
      overlapSubsequence(str1, str2, i, j+1, memo)
    )
  }

  memo[pos] = result 
  return result 
  
  
};