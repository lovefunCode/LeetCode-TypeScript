
export {}
function reverseWords(s: string):string{
    let splittedArr = s.trim().split(' ')
    console.log(splittedArr)
    let res: string[] = []
    for(let i = splittedArr.length-1; i >= 0; i--){
        if(splittedArr[i]){
            res.push(splittedArr[i]) 
        }
    }
    console.log(res)

    return res.join(' ')
}
const s = "  hello   world  "
console.log(reverseWords(s))