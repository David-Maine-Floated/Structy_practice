const pairSum = (numbers, targetSum) => {
    const previousNums = {} 
    for(let i = 0; i < numbers.length; i++) {
      let num = numbers[i]
      let compliment = targetSum - num 
      if(previousNums[compliment] !== undefined) return [i, previousNums[compliment]]

      previousNums[num] = i
      
    }
};