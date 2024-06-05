def pair_product(numbers, target_product):
  count = {}

  for i, num in enumerate(numbers):
    diff = target_product/num 
    if diff in count: return (count[diff], i)

    count[num] = i 