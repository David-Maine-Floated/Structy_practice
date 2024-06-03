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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];

        function dfs(node) {
            // console.log(node)
            if(!node) {
                res.push('n')
                return
            }
            res.push(String(node.val))
            dfs(node.left)
            dfs(node.right)
        }
        // console.log(res)
        dfs(root)
        return res.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        let i = 0;

        function dfs() {
            if(vals[i] == 'n') {
                i +=1;
                return null
            }
            let node = new TreeNode(Number(vals[i]))
            i++
            node.left = dfs()
            node.right = dfs()
            return node
        }

        return dfs()
    }
}