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
    maxDepth(root) {
        if(!root) return 0

        let max = 1;

        // let node = new TreeNode(root.val)
        let left = (this.maxDepth(root.left))
        let right = (this.maxDepth(root.right))

        max += Math.max(left, right)

        return max
    }
}