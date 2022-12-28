// var threeSum = function(nums) {
//     let res = [];
//     for (let i = 0 ; i < nums.length ; i++){
//         for(let j = 0 ; j < nums.length; j++){
//             for (let n = 0 ; n < nums.length ; n++){
//                 if((nums[i]+nums[j]+nums[n]) === 0 
//                 && i!==n 
//                 && j!==i 
//                 && j!==n){
//                     res.push([nums[i],nums[j],nums[n]]);
//                 }
//             }
//         }
//     }

//     for (let i = 0 ; i< res.length ; i++){
//         for (let j = 0 ; j <res.length ; j++) {
//             if(Math.max(...res[i]) === Math.max(...res[j])
//             && Math.min(...res[i]) === Math.min(...res[j]
//             && i !== j)){
//                 res[j] = [];
//             }
//             else{
//                 console.log("false")
//             }
//         }
//     }
//     return res.filter(function(ele){
//         return ele.length
//     })
// };
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
   const triplets = [];

   for(let i=0; i < nums.length - 2; i++){
       if(nums[i] != nums[i-1]){ // making sure our solution set does not contain duplicate triplets
           let left = i + 1;
         let right = nums.length - 1;

           while (left < right){
               const currentSum = nums[i] + nums[left] + nums[right];
               if (currentSum === 0){
                   triplets.push([nums[i], nums[left], nums[right]]);
                   while(nums[left] == nums[left + 1]) left ++
                   while(nums[right] == nums[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                   left ++;
                   right --;
               } else if(currentSum < 0) {
                   left ++
               } else if(currentSum > 0){
                   right --
               }
           }
       }
   }
   return triplets
};

console.log(threeSum([8,1,-9]));
