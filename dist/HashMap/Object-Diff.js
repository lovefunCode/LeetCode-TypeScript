"use strict";
function objDiff(obj1, obj2) {
    // find common keys
    // 1. both are primitive types
    if (!isObject(obj1) && !isObject(obj2)) {
        return obj1 === obj2 ? {} : [obj1, obj2];
    }
    // 2. one is primitive type, one is object
    if (!isObject(obj1) || !isObject(obj2)) {
        return [obj1, obj2];
    }
    // 3. one is Array, one is Object
    if (Array.isArray(obj1) != Array.isArray(obj2)) {
        return [obj1, obj2];
    }
    // 4.both are Object or Array
    const diff = {};
    const keys = new Set([...Object.keys(obj1)]);
    for (let key of keys) {
        // Only if they have the common keys then diff
        if (obj2.hasOwnProperty(key)) {
            const res = objDiff(obj1[key], obj2[key]);
            if (Object.keys(res).length) {
                diff[key] = res;
            }
        }
    }
    return diff;
}
function isObject(obj) {
    return typeof (obj) === 'object' && obj !== null;
}
const obj1 = {};
const obj2 = {
    "a": 1,
    "b": 2
};
console.log(objDiff(obj1, obj2));
// Output: {}
// Explanation: There were no modifications made to obj1. 
// New keys "a" and "b" appear in obj2,
//  but keys that are added or removed should be ignored.
// Test2:
const obj3 = {
    "a": 1,
    "v": 3,
    "x": [],
    "z": {
        "a": null
    }
};
const obj4 = {
    "a": 2,
    "v": 4,
    "x": [],
    "z": {
        "a": 2
    }
};
console.log(objDiff(obj3, obj4));
//   Output: 
//   {
//     "a": [1, 2],
//     "v": [3, 4],
//     "z": {
//       "a": [null, 2]
//     }
//   }
// Test3: 
const obj5 = {
    "a": 5,
    "v": 6,
    "z": [1, 2, 4, [2, 5, 7]]
};
const obj6 = {
    "a": 5,
    "v": 7,
    "z": [1, 2, 3, [1]]
};
console.log(objDiff(obj5, obj6));
// Output: 
// {
//   "v": [6, 7],
//   "z": {
//     "2": [4, 3],
//     "3": {
//       "0": [2, 1]
//     }
//   }
// }
const obj7 = {
    "a": { "b": 1 },
};
const obj8 = {
    "a": [5],
};
// Output: 
// {
//   "a": [{"b": 1}, [5]]
// }
console.log(objDiff(obj7, obj8));
