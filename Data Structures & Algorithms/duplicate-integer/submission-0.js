class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (!nums) return false;

        let point1 = 0;
        let point2 = 1;

        while (point1 < nums.length - 1) {
            if (nums[point1] === nums[point2]) {
                return true;
            }

            if (point2 === nums.length - 1) {
                point1++;
                point2 = point1 + 1;
            } else {
                point2++;
            }
        }

        return false;
    }
}