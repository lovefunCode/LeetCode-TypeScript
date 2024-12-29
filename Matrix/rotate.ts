export {}
// Do not return anything, modify matrix in-place instead.
function rotateReturn(matrix: number[][]) : number[][]{
    let res: number[][] = []
    for(let j = 0; j < matrix[0].length; j++){
        let temp = []
        for(let i = matrix.length-1; i >= 0; i--){
            console.log(matrix[i][j])
            temp.push(matrix[i][j])
        }
        res.push(temp)
    }
    return res
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))