// function rev (arr){
//     let ar = [];
// for (let h = arr.length-1 ; h >= 0 ; h--){
//     ar.push(arr[h]);
// }
// return ar
// }
let time1 = Date.now();
var addTwoNumbers = function(l1, l2) {
    let arr1 = l1.reverse();
    let arr2 = l2.reverse();
    let num1 = 0;
    let num2 = 0;
    for (let i = 0 ; i<l1.length ; i++){
        num1 += arr1[i] * Math.pow(10 , (l1.length-(i+1)));
    }
    for (let j = 0 ; j<l2.length ; j++){
        num2 += arr2[j] * Math.pow(10 , (l2.length-(j+1)));
    }
    num3 = `${num1+num2}`
   let res = num3.split('').reverse().map(function(index){
    return Number(index);
   })
console.log(res);
return res;
};
addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]);
let time2 = Date.now();
console.log(time2-time1);