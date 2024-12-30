type F = (...args: unknown[]) => void
function debounce(fn: F, t: number): F {
    let timerId: number | undefined
    return function (...args: unknown[]) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...args)
            timerId = undefined
        }, t)
    }
}

function debounceApply(fn: F, t: number): F{
    let timerId : undefined| number = undefined
    return function(this: unknown[], ...args: unknown[]){
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fn.apply(this, args)
            timerId = undefined
        }, t)
    }
}

const log = debounceApply(console.log, 100);
log('Hello1'); // cancelled
log('Hello2'); // cancelled
log('Hello3'); // Logged at t=100ms