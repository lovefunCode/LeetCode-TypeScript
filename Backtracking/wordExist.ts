function wordExist(board: string[][], word: string): boolean{
    let rows = board.length
    let columns = board[0].length

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(backtrack(i, j, 0)){
                return true
            }
        }
    }

    function backtrack(i: number, j:number, index:number):boolean{
        if(index + 1 === word.length){
            return true
        }
        if(i < 0 || j < 0 || i > rows || j > columns || board[i][j] !== word[index]){
            return false
        }
        let directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1]
        ]
        let temp =  board[i][j]
        board[i][j] = '#'
        for(let [row, col] of directions){
           if( backtrack(i + row, j + col, index+1)){
                return true
           }
        }
        board[i][j] = temp
        return false
    }
    return false
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
console.log(wordExist(board, word))