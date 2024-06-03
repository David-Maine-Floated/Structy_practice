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


//BFS :


// /**
//  * Definition for a binary tree node.
//  * class TreeNode {
//  *     constructor(val = 0, left = null, right = null) {
//  *         this.val = val;
//  *         this.left = left;
//  *         this.right = right;
//  *     }
//  * }
//  */

// class Codec {
//     /**
//      * Encodes a tree to a single string.
//      *
//      * @param {TreeNode} root
//      * @return {string}
//      */
//     serialize(root) {
//         if (!root) return 'n';
//         let res = [];
//         const queue = [root];

//         while (queue.length) {
//             let curr = queue.shift();
//             if (curr) {
//                 res.push(curr.val);
//                 queue.push(curr.left);
//                 queue.push(curr.right);
//             } else {
//                 res.push('n');
//             }
//         }
//         console.log(res)
//         return res.join(',');
//     }

//     /**
//      * Decodes your encoded data to tree.
//      *
//      * @param {string} data
//      * @return {TreeNode}
//      */
//     deserialize(data) {
//    if (data === 'n') return null;

//         const vals = data.split(',');
//         const root = new TreeNode(Number(vals[0]));
//         const queue = [root];
//         let i = 1;

//         while (queue.length) {
//             let node = queue.shift();

//             if (vals[i] !== 'n') {
//                 node.left = new TreeNode(Number(vals[i]));
//                 queue.push(node.left);
//             }
//             i++;

//             if (vals[i] !== 'n') {
//                 node.right = new TreeNode(Number(vals[i]));
//                 queue.push(node.right);
//             }
//             i++;
//         }

//         return root;
//     }
// }