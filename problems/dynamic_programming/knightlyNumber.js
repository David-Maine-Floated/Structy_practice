const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const key = m + ',' + kr + ',' + kc;

  if(key in memo) return memo[key]
  if(kr === pr && kc === pc && m === 0) return 1
  if(m === 0) return 0
  // if(kr < 0 || kr >= n || kc < 0 || kc >= n) return 0 

  let deltas = [[2,1],[-2,1],[2,-1],[-2,-1],[1,2],[-1,-2],[1,-2],[-1,2]]

  let amount = 0
  for(let delta of deltas) {
    let [deltaR, deltaC] = delta
    let newR = kr + deltaR;
    let newC = kc + deltaC;
    if(newR >= 0 && newR < n && newC >= 0 && newC < n) {
      amount += knightlyNumber(n, m-1, newR, newC, pr, pc, memo) 
    } 
  }

  memo[key] = amount;
  return amount;
};