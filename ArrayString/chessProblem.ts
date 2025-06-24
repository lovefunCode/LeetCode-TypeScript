function chessGeneralProblem(){
    let arr = []
    for(let ax = 100; ax < 103; ax++){
        for(let ay = 8; ay < 11; ay++){
            for(let bx = 100; bx < 103; bx++){
                for(let by = 0; by < 3; by++){
                    if(ax == bx) continue
                    arr.push([String.fromCharCode(ax) + ':' + ay, String.fromCharCode(bx) + ':' + by])
                }
            }
        }
    }
    return arr
}

console.log(chessGeneralProblem())