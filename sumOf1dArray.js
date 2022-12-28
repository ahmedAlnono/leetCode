/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */
 var runningSum = function(nums) {
    let result = 0;
    let arr = [];
    for(let i = 0 ; i < nums.length ; i++){
        result += nums[i]
            arr.push(result);
    }
    return arr;
};
console.log(runningSum([1,2,3,4]))