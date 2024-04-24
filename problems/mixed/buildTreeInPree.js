class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPre = (inOrder, preOrder, inStart = 0, inEnd = inOrder.length - 1, preStart = 0, preEnd = preOrder.length - 1,) => {
  if(inStart > inEnd) return null
  
  const rootVal = preOrder[preStart]
  const root = new Node(rootVal)
  const rootI = inOrder.indexOf(rootVal)
  const leftSize = rootI - inStart 
  root.left = buildTreeInPre(
    inOrder,
    preOrder,
    inStart,
    rootI - 1,
    preStart + 1, 
    preStart + leftSize
    , 
  );
  root.right = buildTreeInPre(
    inOrder, 
    preOrder,
    rootI + 1,
    inEnd, 
    preStart + leftSize + 1,
    preEnd 
  );
  return root;
};



const buildTreeInPreN2 = (inOrder, preOrder) => {
  if(inOrder.length === 0) return null
  
  const rootVal = preOrder[0]
  let root = new Node(rootVal)
  let mid = inOrder.indexOf(rootVal)
  let inOrderLeft = inOrder.slice(0, mid)
  let inOrderRight = inOrder.slice(mid + 1)
  let preOrderLeft = preOrder.slice(1, inOrderLeft.length + 1)
  let preOrderRight = preOrder.slice(inOrderLeft.length + 1)
  root.left = buildTreeInPre(inOrderLeft, preOrderLeft)
  root.right = buildTreeInPre(inOrderRight, preOrderRight)

  return root
};