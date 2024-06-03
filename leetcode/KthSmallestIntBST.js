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

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @param {number} k
//      * @return {number}
//      */
//     kthSmallest(root, k) {
//       const stack = []

//       let curr = root;
//       while(stack.length > 0 || curr) {
//         while (curr) {
//             stack.push(curr)
//             curr = curr.left
//         }
//         curr = stack.pop()
//         k--
//         if(k === 0) return curr.val

//         curr = curr.right
//       }

//     }
// }


//with recursion: 

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

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @param {number} k
//      * @return {number}
//      */
//     kthSmallest(root, k) {
       
//         function dfs(root) {
//             if(!root) return 
//             const left = dfs(root.left);
//             if (left !== undefined) return left;

//             k--
//             if(k==0) return root.val
//             return dfs(root.right)
//         }
//         return dfs(root)
//     }
// }