export {}; // Makes this file a module
type valueObject = {
    value: string|number,
    timerId: number
}
class LRUCacheWithSetTimeout{
    cache: Map<string|number, valueObject>
    capacity: number
    constructor(capacity: number){
        this.cache = new Map()
        this.capacity = capacity
    }
    set(key: number|string, value: string|number, duration: number): void{
        if(this.cache.has(key)){
            const existingValue = this.cache.get(key)
            clearTimeout(existingValue?.timerId)
            this.cache.delete(key)
        }else{
            if(this.capacity == this.cache.size){
                let removekey = Array.from(this.cache.keys())[0]
                const removeValue = this.cache.get(removekey)
                clearTimeout(removeValue?.timerId)
                this.cache.delete(removekey)
            }
        }
        let timerId = setTimeout(()=>{
            this.cache.delete(key)
        }, duration)
        this.cache.set(key, {
            value,
            timerId
        })
        
    }
    get(key: number|string): number|string{
        let valueObj = this.cache.get(key)
        if(valueObj){
            this.cache.delete(key)
            this.cache.set(key, valueObj)
            return valueObj.value
        }
        return -1
    }
    count(): number{
        return this.cache.size
    }
}

const lruCache = new LRUCacheWithSetTimeout(2)

lruCache.set(1, 'one', 1000)
lruCache.set(2, 'Two', 1000)
lruCache.set(3, 'Three', 1000)

console.log(lruCache.get(3))