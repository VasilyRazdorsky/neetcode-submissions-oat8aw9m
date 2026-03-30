class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const outputArr = Array.from({length: nums.length}, () => [1]);

        for (let ind = 0; ind < nums.length; ind++) {
            for (let j = 0; j < nums.length; j++) {
                if (ind !== j) {
                    outputArr[j] = outputArr[j] * nums[ind];
                }
            }
        }

        return outputArr;
    }
}
