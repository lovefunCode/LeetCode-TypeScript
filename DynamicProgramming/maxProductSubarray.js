"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxProductSubarray(nums) {
    var preMax = nums[0];
    var preMin = nums[0];
    var res = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var currMax = Math.max(nums[i], nums[i] * preMax, nums[i] * preMin);
        var currMin = Math.min(nums[i], nums[i] * preMax, nums[i] * preMin);
        preMax = currMax;
        preMin = currMin;
        res = Math.max(res, preMax);
    }
    return res;
}
var nums = [2, 3, -2, 4];
console.log(maxProductSubarray(nums));
