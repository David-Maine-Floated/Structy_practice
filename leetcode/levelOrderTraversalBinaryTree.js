/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */


//With Stack:

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {number[][]}
//      */
//     levelOrder(root) {
//         if(!root) return []
//         let result = []
//         const stack = [[root, 0]]
//         while(stack.length) {
//             const [currentNode, index] = stack.pop();
//             if(result[index] === undefined) result[index] = [];
//             result[index].push(currentNode.val);
//             if(currentNode.right) stack.push([currentNode.right, index + 1])
//             if(currentNode.left) stack.push([currentNode.left, index + 1])
//         }
//         return result
//     }

// }


//With Queue: 

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [root];
        let res = [];
        while(queue.length) {
            let row = []
            let leng = queue.length;
            for(let i = 0; i < leng; i++) {
                let curr = queue.shift()
                if(curr) {
                    row.push(curr.val)
                    queue.push(curr.left)
                    queue.push(curr.right)
                }
            }
            if(row.length) res.push(row)
        }
    return res
    }

}