function timeDifference(date1:string, date2:string): string|number{
    const d1: Date = new Date(date1)
    const d2: Date = new Date(date2)
    console.log(d1, d2)
    let timeDiff = Math.abs(d2.getTime()-d1.getTime())
    let dayDiff = Math.floor(timeDiff/(1000*60*60*24))
    let monthDiff = dayDiff/30
    let hours = dayDiff * 8

    return `From when you've arrived in the UK until ${date2}, Total is ${dayDiff} days, ${hours} hours, ${monthDiff.toFixed(2)}monthDiff`
}


// Example usage:
const date1 = "2023-6-30";
const date3 = "2025-1-31";
const date4 = new Date().toString();
console.log('date4---', date4)


console.log(timeDifference(date1, date3))
console.log(timeDifference(date1, date4))

// function duplicateValues(...args: any){
//     return new Set(args).size != args.length
// }
// console.log(duplicateValues(1,2,3,4,3,5,6,6))

