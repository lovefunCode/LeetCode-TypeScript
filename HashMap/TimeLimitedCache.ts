
export {}; // Makes this file a module
type ValueObject = { value: string|number; timerId: number };

class TimeLimitedCache{
    cache: Map<number, ValueObject>
    constructor(){
        this.cache = new Map()
    }
    get(key: number): number|string{
        if(this.cache.has(key)){
            return this.cache.get(key)!.value
        }
        return -1
    }
    set(key: number, value: string|number, duration: number): boolean{
        const keyExisted = this.cache.get(key)
        if(keyExisted){
            clearTimeout(keyExisted.timerId)
        }
        let timerId: number = setTimeout(()=>{
            this.cache.delete(key)
        }, duration)
        this.cache.set(key, {
            value,
            timerId
        })

        return Boolean(keyExisted)
    }
    count():number{
        return this.cache.size
    }
}

const timeLimitedCache = new TimeLimitedCache()
// Test 1: Setting a new key
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1

// Test 2: Setting an existing key
setTimeout(() => {
    console.log(timeLimitedCache.set(1, 100, 500)); // true (key already exists)
    console.log(timeLimitedCache.get(1)); // 100 (updated value)
    console.log(timeLimitedCache.count()); // 1 (still one active key)
}, 200); // Update within the original key's duration

// Test 3: Expiration of keys
setTimeout(() => {
    console.log(timeLimitedCache.get(1)); // -1 (key expired)
    console.log(timeLimitedCache.count()); // 0 (no active keys)
}, 1200); // Wait for the first key to expire
