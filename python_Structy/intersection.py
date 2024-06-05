def intersection(a, b):
  countA = set(a)
  # result = []


  # for num in b: 
  #   if num in countA:
  #     result.append(num)


  return [ele for ele in b if ele in countA]
  