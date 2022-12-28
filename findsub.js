// var findSubstring = function(s, words) {

//     function search(){
//         for(let i = 0 ; i< words.length ; i++){
//             console.log(s.indexOf(words[i].toString()));
//         }
//     }
// };

// findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
//  var removeElement = function(nums, val) {
//   return nums.filter(function(ele){
//         return ele !== val;
//     });
    
// };
// console.log(removeElement([0,1,2,2,3,0,4,2] , 2));


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLastWord = function(s) {
//     let arr = s.trim().split(" ");
//     return arr[arr.length-1].length;
// };
// console.log(lengthOfLastWord("hello world"))

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    // if(digits.length === 1&& digits[0] === 9){
    //     return [1,0]
    // }
    for(let i = digits.length-1 ; i >= 0 ; i--){
        if(i === 0&& digits[i] ===9){
            digits[i] = 0;
            digits.unshift(1)
        }
       else if(digits[i] === 9){
            digits[i] = 0; 
        }
        else{
            digits[i]+=1;
            break;
        }
    }
    return digits
};
console.log(plusOne([9,9]))
for(let i =0 ; i<10 ; i++){
    console.log("the code work well")
}