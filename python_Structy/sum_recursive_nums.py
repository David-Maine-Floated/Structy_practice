def sum_numbers_recursive(numbers):
  if len(numbers) == 0: return 0
  return numbers[0] + sum_numbers_recursive(numbers[1:])
