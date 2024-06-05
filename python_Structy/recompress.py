def compress(s):

  result = []

  left = 0
  right = 0

  while right < len(s):
    while(right < len(s) and s[left] == s[right]):
      right +=1

    count = right - left 
    if count > 1: result.append(str(count))
    result.append(s[left])
    left = right 
 

  return "".join(result)