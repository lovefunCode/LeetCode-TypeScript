export {}
type Fn = (accum: number, curr: number) => number
function reduce(nums: number[], fn: Fn, init: number): number {
    let res = init
    // for(let num of nums){
    //    res =  fn(res, num)
    // }
    nums.forEach((num) => {
        res = fn(res, num)
    })
    return res

}
const nums = [1, 2, 3, 4]
const fn = function sum(accum: number, curr: number) { return accum + curr; }
const init = 0
console.log(reduce(nums, fn, init))


// array reduce use cases

// 1. sum of numbers
const sum = nums.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log('1.sum of numbers', sum)

// 2.flat  an array
const nestArr: (number | string)[][] = [[1, '2'], [3, 4], [5]];
const flattened = nestArr.reduce((acc, curr) => {
    return acc.concat(curr)
}, [])
console.log('2.flat  an array', flattened)   //[ 1, '2', 3, 4, 5 ]

// 3. Group Objects by Property 
interface Item{
    category: string;
    name: string;
}
const items: Item[] = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
]
// <Record<string, Item[]>> specifies the type of the accumulator(acc)
const grouped = items.reduce<Record<string, Item[]>>((acc, item)=>{
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item)
    return acc
}, {})
console.log('3. Group Objects by Property', grouped)   

// 4. sort the object
// Record <K, V> is an utility type that represents an object type with keys of type K
// value of V
type RecordOfArray = Record <string, (number|string)[]>
interface RecordOfArray2{
    [key: string] : (number|string)[]
}
type RecordOfArray3 = {[key: string] : (number|string)[]}
const unsortedObject: RecordOfArray = {
    '0': [5, 13],
    '1': [8],
    '2': [4],
    '-1': [4],
    '-2': [11]
};
// To fix this, need to explicitly define the type of acc in the reduce function
const sortObj = Object.keys(unsortedObject).sort((a, b)=>Number(a)-Number(b)).reduce((acc, curr)=>{
    acc[curr] = unsortedObject[curr]
    return acc
}, {} as RecordOfArray)
console.log('4. sort the object', sortObj)

const sortObj2 = Object.keys(unsortedObject).sort((a, b)=>Number(a)-Number(b)).reduce<RecordOfArray>((acc, curr)=>{
    acc[curr] = unsortedObject[curr]
    return acc
}, {})
console.log('4. sort the object', sortObj2)

// 5.Chaining Asynchronous operations
type PromiseType = (()=>Promise<number>)[]
const tasks: PromiseType = [
    ()=>Promise.resolve(1),
    ()=>Promise.resolve(2),
    ()=>Promise.resolve(3),
]
const executeTasks = async(tasks: PromiseType)=>{
    const results = await tasks.reduce(async(accPromise, task)=>{
        const acc = await accPromise;
        const result = await task()
        return [...acc, result]
    }, Promise.resolve([]) as Promise<number[]>)
    return results
}
executeTasks(tasks).then(console.log)

// 6. creating a conditional aggregate
const numbers: number[] = [1, -2, 3, -4, 5]
const positiveSum = numbers.reduce((acc, curr)=>{
    return curr > 0 ? acc+curr: acc 
}, 0)

console.log('6. creating a conditional aggregate',positiveSum)