function generateParentheses(n: number): string[]{
    let res: string[] = []
    function backtrack(curr: string, open: number, close: number){
        if(curr.length == n *2){
            res.push(curr)
            return
        }
        if(open < n){
            backtrack(curr+'(', open + 1, close)
        }
        if(open > close){
            backtrack(curr+')', open, close+1)
        }
    }

    backtrack('', 0, 0)

    return res
}

const n = 3
console.log(generateParentheses(n))