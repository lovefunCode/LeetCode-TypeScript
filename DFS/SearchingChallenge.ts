function searchingChallenge(strArr: string[]){
    const matrix = strArr.map((row: string)=>row.split('').map(Number))
    console.log(matrix)
    const rows = matrix.length
    const cols = matrix[0].length
    let visited = Array.from(Array(rows), ()=> new Array(cols).fill(false))
    // directions for moving, left, right, top, bottom
    const directions = [
        [0, 1], [0, -1], [-1, 0], [1, 0]
    ]

    function dfs(row: number, col: number){
        visited[row][col] = true
        for(const [dx, dy] of directions){
            const newRow = row + dx
            const newCol = col + dy
            if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
                && matrix[newRow][newCol] == 0 && !visited[newRow][newCol]
            ){
                dfs(newRow, newCol)
            }
        }
    }

    let holeCount = 0
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(matrix[row][col] == 0 && !visited[row][col]){
                dfs(row, col)
                holeCount++
            }
        }
    }
    return holeCount
}
const strArr = ["01111", "01101", "00011", "11110"]  //return 2.
console.log(searchingChallenge(strArr))
