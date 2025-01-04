export {}
// flatMap combines mapping and flattening operations on arrays
// 1. Transform each element in an array into another array(mapping)
// 2. Flatten the resulting arrays into a single-level array(flattening)

//  array.flatMap(callback(element, index, array), thisArg)

const numbers: number[] = [1, 2, 3]
const result =  numbers.flatMap((num, index, numbers)=>{
    // console.log(num, index, numbers)
    return [num, num*3, num*4]
})

console.log(result)
console.log(numbers)

const result2 = numbers.map((item)=>[item, item*2])
console.log(result2)   //[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]
console.log(result2.flat())   //[ 1, 2, 2, 4, 3, 6 ]