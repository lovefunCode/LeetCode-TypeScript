class LRUCacheWithSetTimeout {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    set(key, value, duration) {
        if (this.cache.has(key)) {
            const existingValue = this.cache.get(key);
            clearTimeout(existingValue === null || existingValue === void 0 ? void 0 : existingValue.timerId);
            this.cache.delete(key);
        }
        else {
            if (this.capacity == this.cache.size) {
                let removekey = Array.from(this.cache.keys())[0];
                const removeValue = this.cache.get(removekey);
                clearTimeout(removeValue === null || removeValue === void 0 ? void 0 : removeValue.timerId);
                this.cache.delete(removekey);
            }
        }
        let timerId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, {
            value,
            timerId
        });
    }
    get(key) {
        let valueObj = this.cache.get(key);
        if (valueObj) {
            this.cache.delete(key);
            this.cache.set(key, valueObj);
            return valueObj.value;
        }
        return -1;
    }
    count() {
        return this.cache.size;
    }
}
const lruCache = new LRUCacheWithSetTimeout(2);
lruCache.set(1, 'one', 1000);
lruCache.set(2, 'Two', 1000);
lruCache.set(3, 'Three', 1000);
console.log(lruCache.get(3));
export {};
