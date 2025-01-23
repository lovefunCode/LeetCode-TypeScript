function isMatched(s: string, p: string): boolean{
    let res: boolean[][] = Array.from(Array(s.length + 1), ()=> new Array(p.length + 1).fill(false))
    res[0][0] = true
    // console.log('===---', s.length, p.length)
    // console.log('res---', res)
    for(let i = 1; i <= p.length; i++){
        if(p[i-1] == '*'){
            res[0][i] = res[0][i-1]
        }
    }

    for(let i = 1; i <= s.length; i++){
        for(let j = 1; j <= p.length; j++){
            if(s[i-1] == p[j-1] || p[j-1] == '?'){
                res[i][j] = res[i-1][j-1]
            }else if(p[j-1] == '*'){
                res[i][j] = res[i-1][j] || res[i][j-1]
            }
        }
    }

    console.log(res)
    return res[s.length][p.length]
}

const s = "abcde", p = "abcde"
console.log(isMatched(s, p))