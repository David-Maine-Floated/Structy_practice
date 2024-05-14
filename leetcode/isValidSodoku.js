var isValidSudoku = function(board) {
    const rows = {};
    const cols = {};
    const boxes = {};

    for(let row=0; row < board.length; row++) {
        for(let col=0; col < board[0].length; col++) {
            if(board[row][col] === '.') continue 

            let rowPos = row.toString() + ',' + board[row][col]
            if(rows[rowPos]) return false 
            rows[rowPos] = true 


            let colPos = col.toString() + ',' + board[row][col]
            if(cols[colPos]) return false 
            cols[colPos] = true 

            let boxRow = Math.floor(row/3)
            let boxCol = Math.floor(col/3)
            
            let boxPos = boxRow.toString() + ',' + boxCol.toString() + board[row][col]
            console.log(boxPos)
            if(boxes[boxPos]) return false 
            boxes[boxPos] = true 
        }
    }
    return true 
};