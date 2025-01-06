export {}
type F = (...args: unknown[])=> void
//  Basic throttle(without last call handling)
function basicThrottle(fn: F, t: number): F{
    let isThrottle: boolean = false
    return function(...args: unknown[]){
        if(!isThrottle){
            fn(...args)
            isThrottle = true
            setTimeout(()=>{
                isThrottle = false
            }, t)
        }
    }
}

// throttle: rate limiting
// advanced throttle(with last call handling)
// This  version remember the last call made during the throttle period and executes it 
//  after the period ends
function throttle(fn: F, t: number): F{
    let isThrottle: boolean = false
    let queue: unknown[][] = [];  // queue to store all pending calls
    const wrapper =  function(...args: unknown[]){
        if(!isThrottle){
            fn(...args)
            isThrottle = true
            setTimeout(()=>{
                isThrottle = false  // allow the next call
                if(queue.length > 0){
                    const nextArgs = queue.shift()
                    wrapper(...(nextArgs || []))
                }
            }, t)
        }else{
            queue.push(args)
        }
    }
    return wrapper
}

const throttled = basicThrottle(console.log, 1000);
throttled("log1"); // logged immediately.
throttled("log2"); // logged at t=100ms.
throttled("log3"); // logged at t=100ms.
throttled("log4"); // logged at t=100ms.
