/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let h = 0;
    for (let i = 0 ; i<nums.length ; i++){
        if(nums[i] == nums[i+1]){
            delete nums[i];
            h +=1;
        }
    }
   nums = nums.filter(function(ele){
        return typeof(ele) !== undefined;
    });
    return nums.sort();
};
console.log(removeDuplicates([1,1,1,1,1,1,1,2]));