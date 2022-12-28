/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let left = 0 ;
    let right = 0;
    let all = 0;
    for (let i = 0 ; i < nums.length ; i++){
        if(i == 0){
            for(let t = 1 ; t< nums.length ; t++){  
                all += nums[t];
                if(all === 0 && i === nums.length-1){
                    return 0;
                }
            }
        }
        for(let j = i+1 ; j < nums.length ; j++){
            right+=nums[j];
        }
        for(let n = 0 ; n < i ; n++){
            left +=nums[n];
        }
        if(right === left){
            return i;
        }
        else{
            left = 0 ;
            right = 0;
        }
    }
    return -1
};
console.log(pivotIndex([2,1,-1]))