function flattenArr(arr: any[]): number[] {
    let res: number[] = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...flattenArr(item))
        } else {
            res.push(item)
        }
    }
    return res
}

const arr = [1, [2, [3, [4, [5]]]], 8]
console.log(flattenArr(arr))