"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    LRUCache.prototype.get = function (key) {
        if (this.map.has(key)) {
            var value = this.map.get(key);
            if (value != undefined) {
                this.map.delete(key);
                this.map.set(key, value);
                return value;
            }
        }
        return -1;
    };
    LRUCache.prototype.put = function (key, value) {
        if (this.map.size == this.capacity) {
            if (!this.map.has(key)) {
                var keys = Array.from(this.map.keys());
                this.map.delete(keys[0]);
            }
            else {
                this.map.delete(key);
            }
        }
        this.map.set(key, value);
    };
    return LRUCache;
}());
var obj = new LRUCache(3);
obj.put(1, 'a');
obj.put(2, 'b');
obj.put(3, 'c');
console.log(obj.get(2));
