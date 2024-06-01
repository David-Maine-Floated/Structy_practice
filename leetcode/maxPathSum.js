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
     * @return {number}
     */
    maxPathSum(root, max = -Infinity) {
       let res = root.val 

       function dfs(root) {
        if(!root) return 0

        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0)

        res = Math.max(res, (leftMax + rightMax + root.val))

        return root.val + Math.max(leftMax, rightMax)
       }
    
        dfs(root)
       return res
    }
}