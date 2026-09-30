class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum = function(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const reminder = target - nums[i];

            if(map.has(reminder)) return [map.get(reminder), i];

            map.set(nums[i], i);
        }
    }
}
