// var twoSum = function(nums, target) {
//     for(let i = 0 ; i < nums.length ; i++){
//         for(let j = 0 ; j < nums.length ; j++){
//             if(nums[i]+nums[j] === target && i !==j){
//                     return [i , j];
//             }
//         }
//     }
// };
// console.log(twoSum([2,5,5,11] , 10));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    for(let i =0 ; i< nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
};
console.log(search([4,5,6,7,0,1,2] , 2));