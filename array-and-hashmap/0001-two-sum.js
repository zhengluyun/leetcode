/**
 * Time O(N) | Space O(N)
 */
var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return [map[nums[i]], i];
        }
        map[target - nums[i]] = i;
    }
};