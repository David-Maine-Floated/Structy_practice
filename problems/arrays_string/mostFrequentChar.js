const mostFrequentChar = (s) => {
  //create an obj keeping count + the first index of the occurance
  
  let count = {}
  let max = [0,0]
  let maxChar;
  for (let i = 0; i < s.length; i++) {
    if(!count[s[i]]) count[s[i]] = [1, i]
    else count[s[i]][0] += 1
  }
  console.log(count)
  for(let char in count) {
    let num = count[char][0]
    if(num === max[0]) {
      if(count[char][1] < max[1]) {      
        max = count[char]
        maxChar = char 
      }

    } else if (num > max[0]) {
      max = count[char]
      maxChar = char
    } 
  }
  
  return maxChar
  
};