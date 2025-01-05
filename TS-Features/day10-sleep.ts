async function sleep(millis: number): Promise<void> {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, millis)
    })
}

async function sleep2(millis: number): Promise<void>{
    await new Promise((resolve)=>{
        setTimeout(resolve, millis)
    })
}

let t = Date.now();
sleep2(1000).then(()=>{
    console.log(Date.now()-t)
})

type Fn = (...args: any[])=> Promise<any>

function timeLimit(fn: Fn, t: number): Fn{
    return async function (...args: any[]) {
        return new Promise((resolve, reject)=>{
            const timerId = setTimeout(()=>{
                reject('Time Limit Exceeded!!!')
                clearTimeout(timerId)
            }, t)
            fn(...args).then((res)=>{
                resolve(res)
            }).catch((err)=>{
                reject(err)
            }).finally(()=>{
                clearTimeout(timerId)
            })
        })
    }
}

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log)

// Generic Functions with Promises
function delay<T>(value: T, ms: number): Promise<T>{
    return new Promise((resolve, reject)=>{
        try{
            setTimeout(()=>{
                resolve(value)
            }, ms)
        }catch(err){
            reject(err)
        }
    })
}
delay<string>('Hello, world!', 1000).then((message)=>{
    console.log(message)
})
delay<number>(42, 2000).then((res)=>{
    console.log(res)
})