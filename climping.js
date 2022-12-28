/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2){
        return n;
    }
    else{
        return (n*(n-1))/2
    }
};
console.log(climbStairs(5));