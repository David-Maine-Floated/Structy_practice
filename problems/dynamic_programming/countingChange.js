const countingChange = (amount, coins, i=0, memo = {}) => {
  const key = amount + ',' + i;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  if (i=== coins.length) return 0;

  let count = 0
  let coin = coins[i]
  for(let qty = 0; (qty * coin) <= amount; qty++ ) {
    let remainder = amount - (qty * coin)
    count += countingChange(remainder, coins, i+1, memo)
  }

  memo[key] = count;
  return count;
};