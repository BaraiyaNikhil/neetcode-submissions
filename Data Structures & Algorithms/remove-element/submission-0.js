class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let point = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++){
            if(nums[i] !== val){
                [nums[point], nums[i]] = [nums[i], nums[point]];
                point++;
                count++;
            }
        }
        return count;
    }
}
