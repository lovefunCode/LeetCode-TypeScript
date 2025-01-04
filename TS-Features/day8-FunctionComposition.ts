export {}
type F = (x: number) => number
function compose(functions: F[]): F{
    return function(x: number): number{
        for(let fn of functions.reverse()){
            x = fn(x)
        }
        return x
    }
}

const fn = compose([x=> x+1, x=> x*2])
console.log(fn(4))

function composeReduce(functions: F[]): F{
    return function(x: number): number{
        return functions.reduceRight((acc, fn)=>{
           return fn(acc)
        }, x)
    }
}

const fn2 = composeReduce([x=> x+1, x=> x*2])
console.log(fn2(4))