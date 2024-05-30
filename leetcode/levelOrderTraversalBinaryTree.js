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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        const queue = [];
        if (root) {
            queue.push(root);
        }
        while(queue.length > 0) {
            const subRow = []
            const leng = queue.length;
            for(let i = 0; i < leng; i++) {
                const node = queue.shift();
                subRow.push(node.val);
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
                console.log(subRow)
            } 
            result.push(subRow)
        }
        return result
    }

}