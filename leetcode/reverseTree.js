class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null) return null;

        const node = new TreeNode(root.val)
        node.left = this.invertTree(root.right);
        node.right = this.invertTree(root.left);

        return node
    }
}