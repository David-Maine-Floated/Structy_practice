const bottomRightValue = (root) => {
    const queue = [root]
    let current;
    while(queue.length) {
      current = queue.shift()
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
  return current.val 

};