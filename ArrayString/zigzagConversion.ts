
export {}; // Makes this file a module
function zigzagConvert(s: string, numRows: number): string{
    let res: string[] = new Array(numRows).fill('')
    let dir: boolean = true
    let count: number = 0
    for(let i = 0; i < s.length; i++){
        res[count] += s[i]
        if(dir){
            count++
        }else{
            count--
        }
        if(count == numRows-1){
            dir = false 
        }
        if(count == 0){
            dir = true
        }
        
    }
    console.log(res)
    return res.join('')
}
const s = "PAYPALISHIRING", numRows = 3
console.log(zigzagConvert(s, numRows))
