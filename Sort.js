/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
var sortColors = function(nums) {
    let length = nums.length;
    let arr = [];
    let zero = 0;
    for(let i = 0 ; i < length ; i++){
        if(nums[i] === 0){
            zero++;
        }
        else if(nums[i] === 2){
            arr.push(2);}
            else{
                arr.unshift(1);
            }
        }
        for(let i = 0 ; i < zero ; i++){
            arr.unshift(0);
        }
        };
        console.log(sortColors([2,0,2,1,1,0]));
