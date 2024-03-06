const compress = (s) => {
  //
  let result = [];
  let back = 0;
  let front = 0;
  while (front < s.length) {
    if(s[front] === s[front+1]) {
      front++
    } else {
      let count = front - back + 1
      if(count > 1) result.push(count.toString())
      result.push(s[front])
      front +=1
      back = front 
    }
  }
  return result.join("")
};

module.exports = {
  compress,
};
