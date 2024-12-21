type Point = [number, number]

function minKnightMoves(x: number, y: number): number|void {
    let minMoves: number = 0
    const direction: Point[] = [[1,2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1],[-1, 2]]
    let queue: Point[] = [[0, 0]]
   
    let visited = new Set<string>()
    while(queue.length){
        let levelSize : number = queue.length
        let next: Point[] = []
        for(let i = 0; i < levelSize; i++){
            let curr: Point | undefined = queue.shift()
            if(!curr) continue
            if(curr[0] == x && curr[1] == y){
                return minMoves
            }
            for(let dir of direction){
                let nextX : number = curr[0] + dir[0]
                let nextY : number = curr[1]+ dir[1]
                let key = `${nextX},${nextY}`
                if(!visited.has(key)){
                    visited.add(key)
                    next.push([nextX, nextY])
                }
            }
        }
        minMoves++
        queue = next
    }
    return minMoves
}

console.log(minKnightMoves(2, 1))