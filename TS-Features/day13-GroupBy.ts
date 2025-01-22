interface Array<T> {
    groupBy(fn: (item: T)=> string): Record<string, T[]>
}


Array.prototype.groupBy = function<T>(this: T[], fn:(item: T)=>string):Record<string, T[]>{
    let res: Record<string, T[]> = {}
    for(let val of this){
        let key = fn(val)
        if(!res.hasOwnProperty(key)){
            res[key] = []
        }
        res[key].push(val)
    }

    return res
}

const array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ]
const fn = function (item: {id: string}) { 
    return item.id; 
}
console.log(array.groupBy(fn))

