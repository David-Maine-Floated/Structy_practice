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
     * @return {number[]}
     */
    rightSideView(root, level = 0) {

        const result = []
        const queue = []
        if(root) queue.push(root);
        
        while(queue.length) {
            let subRow = []
            let leng = queue.length;
            // const current = queue.shift();
            for(let i = 0; i < leng; i++) {
                const current = queue.shift();
                subRow.push(current.val);
                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
                
            }

            result.push(subRow[subRow.length - 1])
        }
        return result
        
    }
}