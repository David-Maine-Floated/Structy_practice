class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0 || matrix[0].length === 0) return false; 
        let rows = matrix.length;
        let cols = matrix[0].length;


        let top = 0
        let bot = rows - 1;
        while(top <= bot) {
            let mRow = top + Math.floor((bot - top) / 2)
             if(target > matrix[mRow][cols-1]) {
                top = mRow + 1
            } else if (target < matrix[mRow][0]){
                bot = mRow - 1
            } else { 
                break;
            }
            
        }
        if(top > bot) return false 

        let row = top + Math.floor((bot - top) / 2)
        let l = 0;
        let r = cols - 1;
        while(l <= r) {
            let m = Math.floor((l+r) / 2);
            if(target > matrix[row][m]) {
                l = m+1
            } else if(target < matrix[row][m]) {
                r = m-1
            } else {
                return true;
            }
        }
            return false

    }
    
}