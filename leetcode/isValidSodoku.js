// var isValidSudoku = function(board) {
//     const rows = {};
//     const cols = {};
//     const boxes = {};

//     for(let row=0; row < board.length; row++) {
//         for(let col=0; col < board[0].length; col++) {
//             if(board[row][col] === '.') continue 

//             let rowPos = row.toString() + ',' + board[row][col]
//             if(rows[rowPos]) return false 
//             rows[rowPos] = true 


//             let colPos = col.toString() + ',' + board[row][col]
//             if(cols[colPos]) return false 
//             cols[colPos] = true 

//             let boxRow = Math.floor(row/3)
//             let boxCol = Math.floor(col/3)
            
//             let boxPos = boxRow.toString() + ',' + boxCol.toString() + board[row][col]
//             console.log(boxPos)
//             if(boxes[boxPos]) return false 
//             boxes[boxPos] = true 
//         }
//     }
//     return true 
// };


//with sets: 

var isValidSudoku = function(board) {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();

    for(let row=0; row < board.length; row++) {
        for(let col=0; col < board[0].length; col++) {
            if(board[row][col] === '.') continue 

            let rowPos = row.toString() + ',' + board[row][col]
            if(rows.has(rowPos)) return false 
            rows.add(rowPos) 


            let colPos = col.toString() + ',' + board[row][col]
            if(cols.has(colPos)) return false 
            cols.add(colPos)

            let boxRow = Math.floor(row/3)
            let boxCol = Math.floor(col/3)
            
            let boxPos = boxRow.toString() + ',' + boxCol.toString() + ',' + board[row][col]
            if(boxes.has(boxPos)) return false 
            boxes.add(boxPos)
        }
    }
    return true 
};