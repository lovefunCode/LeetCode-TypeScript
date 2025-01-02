function multiplyStrings(num1: string, num2:string): string{
    if (num1 === "0" || num2 === "0") return "0";
    let res: number[] = new Array(num1.length+num2.length).fill(0)
    console.log(res)
    for(let j = num2.length-1; j >= 0; j--){
        for(let i = num1.length-1; i >= 0; i--){
            let pos = i + j + 1 
            let currNum = Number(num1[i]) * Number(num2[j]) + res[pos]
            console.log(currNum)
            let remainder = currNum %10
            let quotient = Math.floor(currNum/10)
            console.log('remainder', remainder)
            console.log('quotient', quotient)
            res[pos] = remainder
            res[pos-1] += quotient
        }
    }
    // while(res[0] == 0){
    //     res.shift()
    // }
    // console.log(res)
    // return res.join('')

    // or
    return Number(res.join('')).toString()
}

console.log(multiplyStrings('123', '456'))