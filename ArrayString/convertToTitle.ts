function convertToTitle(columnNumber: number):string{
    let result: string = ''
    while(columnNumber > 0){
        columnNumber--
        let remainder = columnNumber % 26
        result = String.fromCharCode(remainder + 65) + result
        console.log(result)
        columnNumber = Math.floor(columnNumber / 26)
    }

    return result
}

console.log(convertToTitle(701) )    //  ZY
console.log(convertToTitle(28) )      // AB
