/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    Alength = a.length;
    Blength = b.length;
    let num;
    let Aval = 0;   let Bval = 0;
    for(let i = Alength-1 , num = 1 ; i >= 0 ; num*=2, i--){
        Aval += num * parseInt(a[i]);
    }
    num =1;
    for(let j = Blength-1 , num = 1 ; j >= 0 ; num*=2, j--){
        Bval += num * parseInt(b[j]);
    }
    res = Aval + Bval;
    let arr = [];
    while(res > 0){
        arr.unshift(res%2);
        res = Math.trunc(res/2);
    }
    console.log(arr.join(""));
};
addBinary("11" , "1");