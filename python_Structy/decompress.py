def uncompress(s):
  nums = ['1','2','3', '4', '5', '6' , '7' ,'8', '9']
  result = ""
  subNum = ""
  for ele in s:
    if ele in nums:
      subNum += ele
    else:
      count = int(subNum)
      while(count > 0):
        result += ele;
        count-= 1
      subNum = ""

  return result