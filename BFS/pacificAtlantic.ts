function pacificAtlantic(heights: number[][]): number[][]{
    let pacificQue: number[][] = []
    let atlanticQue: number[][] = []
    let m: number = heights.length
    let n: number = heights[0].length
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(j == 0 || i == 0){
                pacificQue.push([i, j])
            }
            if(i == m-1 || j == n-1){
                atlanticQue.push([i, j])
            }
        }
    }
    
    console.log(pacificQue, atlanticQue)

    function bfs(queue: number[][]){
        const isValid = (x: number, y:number): boolean=>{
           return (x >= 0 && y >= 0 && x< m && y < n)
        }
        const visited = Array.from(Array(m), ()=> new Array(n).fill(false))
        const direction = [[0, -1], [0, 1], [1, 0], [-1, 0]]
        while(queue.length){
            const [x, y] = queue.shift() || [0, 0]
            visited[x][y] = true
            for(let [dx, dy] of direction){
                let nextX = dx + x
                let nextY = dy + y
                if(!isValid(nextX, nextY)){
                    continue
                }
                if(heights[nextX][nextY] >= heights[x][y] && !visited[nextX][nextY]){
                    queue.push([nextX, nextY])
                }
            }
        }
        return visited
    }
    const pacific = bfs(pacificQue)
    const atlantic = bfs(atlanticQue)
    console.log(pacific, atlantic)

    const result: number[][] = []
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(pacific[i][j] && atlantic[i][j]){
                result.push([i, j])
            }
        }
    }

    return result
}
const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights))