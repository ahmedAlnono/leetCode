/**
 * @param {number} n
 * @return {number[][]}
 */
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
var generateMatrix = function(n) {
    let arr = [];
    for(let i = 0 ; i < n ; i++){
        arr.push([]);
    }
    let line;
    for(line =0 ; line < n ; line++){
        if(line = 1){
            for(let j = 1 ; j < n+1 ; j++){
                arr[line].push(j);
            }}
    }
    return arr;
};
console.log(generateMatrix(3));