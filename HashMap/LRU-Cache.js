"use strict";
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (this.map.has(key)) {
            let value = this.map.get(key);
            if (value != undefined) {
                this.map.delete(key);
                this.map.set(key, value);
                return value;
            }
        }
        return -1;
    }
    put(key, value) {
        if (this.map.size == this.capacity) {
            if (!this.map.has(key)) {
                let keys = Array.from(this.map.keys());
                this.map.delete(keys[0]);
            }
            else {
                this.map.delete(key);
            }
        }
        this.map.set(key, value);
    }
}
const obj = new LRUCache(2);
obj.put(1, 'a');
obj.put(2, 'b');
obj.put(3, 'c');
console.log(obj.get(1));
