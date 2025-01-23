function letterCombinations(digits: string): string[]{
    let map: Record<string, string[]> = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w','x', 'y', 'z'],
    }
    let len = digits.length
    let digitsArr = digits.split('')
    console.log(digitsArr)
    let dig: any = []
    for(let digi of digitsArr){
        // console.log('map[digi]--',map[digi])
        dig.push(map[digi])
    }
    console.log(dig)
    let res: string[] = []
    dfs(0, '')
    function dfs(index: number, curr: string){
        if(index > curr.length){
            return ['']
        }
        if(curr.length == len){
            res.push(curr)
            return
        }
        for(let i = 0; i < dig[0].length; i++){
        //    console.log(dig[index][i])
           dfs(index+1, curr + dig[index][i])
        }
    }

    return res
}
console.log(letterCombinations('237'))