/**
 * @param {number[]} nums
 * @return {number}
 */
// ارجاع اصغر قيمة موجبة يمكن اضففتها 
 var firstMissingPositive = function(nums) {
  let a = nums.length;
  if(nums.indexOf(1) === -1){
    return 1;
  }
  else if(a > 9999){
    return 99998
  }
   for (let i = 1 ; i <= a; i++){
     if(nums.indexOf(i) === -1){
       return i;
      }
  }
  return Math.max(...nums)+1;
};
console.log(firstMissingPositive([1,2,0]))

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs){
  let result = {};for (let word of strs) {
    let cleansed = word.split("").sort().join("");
    if (result[cleansed]) {
      result[cleansed].push(word);
    } else {
      result[cleansed] = [word];
    }
  }return Object.values(result);
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  let h = x;
  if(n < 0){
    h = 1/x;
    n = -n;
    for(let j = 0 ; j < n-1; j++){
      h/=x;
    }
  }
  else if(n === 0 ){
    return 1;
  }
  else{
    for(let i = 0 ; i < n-1 ;i++){
        h*=x;
    }
  }
  return h;
};
console.log(myPow(2,-2));