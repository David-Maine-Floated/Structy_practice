def pair_sum(numbers, target_sum):
  count = {}

  for i, num in enumerate(numbers): 
    diff = target_sum - num 
    if diff in count:
      return (count[diff], i)

    count[num] = i