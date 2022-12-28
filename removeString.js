/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    // nums = nums.filter(function(ele){
    //      return ele !== val;
    //  });
    //  return nums;
    let result = [];
    for(let i = 0 ; i<nums.length ; i++){
        if(nums[i] !== val){
            result.push(nums[i]);
        }
    }
    return result;
 };
 console.log(removeElement([3,2,2,3] , 3));