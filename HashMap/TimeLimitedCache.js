"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeLimitedCache = /** @class */ (function () {
    function TimeLimitedCache() {
        this.cache = new Map();
    }
    TimeLimitedCache.prototype.get = function (key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    };
    TimeLimitedCache.prototype.set = function (key, value, duration) {
        var _this = this;
        var keyExisted = this.cache.get(key);
        if (keyExisted) {
            clearTimeout(keyExisted.timerId);
        }
        var timerId = setTimeout(function () {
            _this.cache.delete(key);
        }, duration);
        this.cache.set(key, {
            value: value,
            timerId: timerId
        });
        return Boolean(keyExisted);
    };
    TimeLimitedCache.prototype.count = function () {
        return this.cache.size;
    };
    return TimeLimitedCache;
}());
var timeLimitedCache = new TimeLimitedCache();
// Test 1: Setting a new key
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
// Test 2: Setting an existing key
setTimeout(function () {
    console.log(timeLimitedCache.set(1, 100, 500)); // true (key already exists)
    console.log(timeLimitedCache.get(1)); // 100 (updated value)
    console.log(timeLimitedCache.count()); // 1 (still one active key)
}, 200); // Update within the original key's duration
// Test 3: Expiration of keys
setTimeout(function () {
    console.log(timeLimitedCache.get(1)); // -1 (key expired)
    console.log(timeLimitedCache.count()); // 0 (no active keys)
}, 1200); // Wait for the first key to expire
