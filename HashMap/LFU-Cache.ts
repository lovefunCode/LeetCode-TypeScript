class LFUCache{
    capacity: number;
    keyToVal: Map<number, number>
    keyToFre: Map<number, number>
    freToKey: Map<number, Set<number>>
    minFre: number
    constructor(capacity: number){
        this.capacity = capacity
        this.keyToVal = new Map()
        this.keyToFre = new Map()
        this.freToKey = new Map()
        this.minFre = 0
    }
    get(key: number): number{
        if(this.keyToVal.has(key)){
            this.updateFrequency(key)
            return this.keyToVal.get(key)!
        }
        return -1
    }
    updateFrequency(key: number):void{
        let fre = this.keyToFre.get(key)!
        this.keyToFre.set(key, fre+1)
        
    }
    put(key: number, value: number):void{
        if(this.capacity == 0) return;
        // has key
        if(this.keyToVal.has(key)){
            this.keyToVal.set(key,value)
            this.updateFrequency(key)
            return
        }
        // 
        if(this.keyToVal.size >= this.capacity){
            this.evictLFU()
        }

        this.keyToVal.set(key, value)
        this.keyToFre.set(key, 1)
        if(!this.freToKey.has(1)){
            this.freToKey.set(1, new Set())
        }
        this.freToKey.get(1)?.add(key)
        this.minFre = 1

    }
    evictLFU(){

    }
}