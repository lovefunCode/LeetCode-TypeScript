function timeDifference(date1:string, date2:string): string|number{
    const d1: Date = new Date(date1)
    const d2: Date = new Date(date2)
    console.log(d1, d2)
    let timeDiff = Math.abs(d2.getTime()-d1.getTime())
    let dayDiff = Math.floor(timeDiff/(1000*60*60*24))
    let hours = dayDiff * 8

    return `From when you've arrived in the UK, Total is ${dayDiff} days, ${hours} hours`
}


// Example usage:
const date1 = "2023-6-30";
const date2 = "2024-12-21";
const date3 = "2024-12-31";

console.log(timeDifference(date1, date2))

console.log(timeDifference(date1, date3))
