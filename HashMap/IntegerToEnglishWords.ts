function integerToEnglishWords(num: number): string {
    let map: Record<number, string> = {
        1000: 'Thousand',
        100: 'Hundred',
        90: "Ninety",
        80: "Eighty",
        70: "Seventy",
        60: "Sixty",
        50: "Fifty",
        40: "Forty",
        30: "Thirty",
        20: 'Twenty',
        19: "Nineteen",
        18: "Eighteen",
        17: 'Seventeen',
        16: "Sixteen",
        15: "Fifteen",
        14: 'Fourteen',
        13: "Thirteen",
        12: 'Twenlve',
        11: "Eleven",
        10: "Ten",
        9: 'Nine',
        8: "Eight",
        7: "Seven",
        6: 'Six',
        5: "Five",
        4: "Four",
        3: 'Three',
        2: "Two",
        1: "One",
    }
    let res = ''
    res = helper(num)
    function helper(currNum: number)  {
        if (currNum == 0) {
            return ''
        }
        if (currNum <= 20 && currNum > 0) {
            return map[currNum]
        }
        for (let [val, str] of Object.entries(map)) {
            console.log('val, str--',val, str)
           
            let quotient = currNum / Number(val)
            let remainder = currNum % Number(val)
            console.log('quotient---', quotient)
            console.log('reminder', remainder)
            // handle 'hundred ' or 'thousand'
            // if (Number(val) >= 100) {
            //     let remainder = currNum % Number(val)
            //     console.log('reminder', remainder)
            //     console.log(`${Math.floor(Number(quotient))} ${str}`)
            //     if (remainder > 0) {
            //         let tem = helper(remainder)
            //         console.log(tem)
            //     }
            // } else {
            //     console.log('======currNum===', currNum, val, str)
            //     let remainder2 = currNum % Number(val)
            //     console.log(`${Math.floor(Number(remainder2))} ${str}`)
            //     // strArr.push(`${Math.floor(Number(quotient))} ${str}`)
            // }


        }
    }
    console.log('res--', res)
    return res

}
const num = 19
console.log(integerToEnglishWords(num))
