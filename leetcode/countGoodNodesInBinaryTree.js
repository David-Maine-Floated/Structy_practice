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
    goodNodes(root, max = root.val) {
        // if(root.val < max) return 0;
        // if(root.val < max) return 1
        if(root.val === null) return 0

        let count = root.val >= max ? 1 : 0
        max = Math.max(root.val, max)


        if(root.left) count += this.goodNodes(root.left, max)
        if(root.right) count += this.goodNodes(root.right, max)

        return count;

    }
}