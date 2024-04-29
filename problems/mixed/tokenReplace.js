const tokenReplace = (s, tokens) => {
  // todo
  let result = ''
  let subStringSwitch = false 
  let subString = ''
  for(let i = 0; i < s.length; i++) {
    if(!subStringSwitch) {
      if(s[i] !== '$') result += s[i]
      else {
        subStringSwitch = true 
        subString += s[i]
      }
    } else {
      if(s[i] !== '$') subString += s[i]
      else {
        subString += s[i];
        result += tokens[subString]
        subString = ''
        subStringSwitch = false 
      }
    }
  }
  return result 
};