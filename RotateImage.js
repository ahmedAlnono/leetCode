/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let result = [];
    for(let a = 0 ; a < matrix.length ; a++){
        result.push([]);
    }
    for(let i = 0 ; i< matrix.length ; i++){
        for(let j = 0 ; j <matrix[0].length ; j++){
            result[j].unshift(matrix[i][j]);
        }
    }
    matrix = result
    return matrix;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))