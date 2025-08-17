class MyPromise{
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.resolveCbs = []
        this.rejectCbs = []
        const resolve = (value)=>{
            if(this.state == 'pending'){
                this.state = 'resolved'
                this.value = value
                this.resolveCbs.forEach(cb=>{
                    if(typeof(cb) === 'function'){
                        cb(this.value)
                    }
                })
            }
        }

        const reject = (reason)=>{
            if(this.state == 'pending'){
                this.state = 'rejected'
                this.reason = reason
                this.rejectCbs.forEach((cb)=>{
                     if(typeof(cb) === 'function'){
                        cb(this.reason)
                    }
                })
            }
        }

        try{
            executor(resolve, reject)
        }catch(err){
            reject(err)
        }
    }

    then(resolve, reject){
        if(this.state == 'resolved'){
            resolve(this.value)
        }else if(this.state == 'resolved'){
            reject(this.reason)
        }else{
            this.resolveCbs.push(resolve)
            this.rejectCbs.push(reject)
        }
       
    }

    catch(reject){
        return this.then(null, reject)
    }

    finally(onFin){
        return this.then(
            value => {onFin(); return value},
            reason => {onFin(); throw reason}
        )
    }
}

const p = new MyPromise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('111111======')
        resolve("I am the resolve===")
    })
})

p.then((res)=>{
    console.log("222----", res)
    return res
}).then((next)=>{
    console.log("333----", next)
}).catch((err)=>{
    console.log("err----", err)
}).finally((fin)=>{
    console.log("fin----", fin)
})