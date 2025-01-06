// Closure : 
// 1. A function is defined inside another function
// 2. The inner function can access variables that the outside of the inner function

for(var i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i)   // 3, 3, 3
    })
}

// fix it. IIFE(Immediately Invoked Function Expression) creates a new scope for each iteration
for(var i = 0; i < 3; i++){
    (function(i){
       setTimeout(()=>{
            console.log(i)    // 0, 1, 2
       }) 
    })(i)
}
// or use let instead of var

// common uses of closures
// 1. Evnet Listeners

// 2. Funciton factories

// 3. Memoization

// HOF(Higher-Order Function)
// 1. accept function as an argument
// 2. return a function as a result

//  deounce & throttle in event handler to reduce frequency
function debounce(fn: any, t: number){
    // The timer variable is stored in the heap memory because it is captured by the closure
    let timer: number|undefined = undefined   // Persisten across functions calls due to closure
    //  This return function forms a closure over'timer'
    // This ensures the timer variable is retained in memory between invocations
    return function(...args: any[]){
        // clear the previous timer if it's still running
        clearTimeout(timer)
        //  The timeout ID will stored in the heap memory as part of the closure
        timer = setTimeout(()=>{
            fn(...args)
        }, t)  
    }
}
const logMessage = debounce((mess: any)=>{
    console.log(mess)
}, 100)
console.log(logMessage("hello,it's me"))

function throttle(fn:any, t: number){
    let isThrottle = false
    return function(...args: any[]){
        if(!isThrottle){
            fn(...args)
            isThrottle = true
            setTimeout(()=>{
                isThrottle = false
            }, t)
        }
    }
}
const logMessage2 = throttle((mess: any)=>{
    console.log(mess)
}, 100)

console.log(logMessage2("hello,it's me1"))
console.log(logMessage2("hello,it's me2"))
console.log(logMessage2("hello,it's me3"))

function curry(fn: any){
    return function curried(...args: any[]){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function(...nextArgs: any[]){
                return curried(...args, ...nextArgs)
            }
        }
    }
}
function add(a: number, b: number, c: number): number{
    return a+b+c
}
const curriedAdd = curry(add)
console.log(curriedAdd(1, 2)(3))

