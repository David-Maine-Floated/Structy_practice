const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  let pos = i+ ',' + j
  if(pos in memo) return memo[pos]
  if(i === j) return 1 
  if( i > j) return 0 

  let result = 0
  if(str[i] === str[j]) {
    result = Math.max((2 + maxPalinSubsequence(str, i+1, j-1, memo)), result )
    
  } else {
    result = Math.max(
      maxPalinSubsequence(str, i+1, j, memo),
      maxPalinSubsequence(str, i, j-1, memo),
      result
    )
  }

  memo[pos] = result 
  return result
};