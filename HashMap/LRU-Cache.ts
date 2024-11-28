export {}; // Makes this file a module
class LRUCache{
    capacity: number;
    map: Map<number, string>;
    constructor(capacity: number){
        this.capacity = capacity
        this.map = new Map()
    }
    get(key: number): string | number{
        if(this.map.has(key)){
            let value = this.map.get(key)
            if(value != undefined){
                this.map.delete(key)
                this.map.set(key, value)
                return value
            }
        }
        return -1
    }
    put(key: number, value: string):void{
        if(this.map.size == this.capacity){
            if(!this.map.has(key)){
               let keys: number[] = Array.from(this.map.keys())
               this.map.delete(keys[0])
            }else{
                this.map.delete(key)
            }
        }
        this.map.set(key, value)
    }
}

const obj =  new LRUCache(3)
obj.put(1, 'a')
obj.put(2, 'b')
obj.put(3, 'c')
console.log(obj.get(2))