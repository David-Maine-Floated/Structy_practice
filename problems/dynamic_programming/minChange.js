const minChange = (amount, coins) => {
  if(!amount || !coins.length) return 0
  let queue = [[amount, 0]];
  let memo = {};

  while (queue.length) {
    let [current, count] = queue.shift();

    for (let coin of coins) {
      let difference = current - coin;

      if (difference === 0) return count + 1; // Found the exact change
      if (difference < 0 || memo[difference]) continue; // Skip invalid combinations

      memo[difference] = true; // Mark this difference as a valid combination
      queue.push([difference, count + 1]); // Add it to the queue for further exploration
    }
  }

  return -1; // If no exact change found
};