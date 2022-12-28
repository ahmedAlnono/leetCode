// var longestPalindrome = function(s) {
//     if (s =="aacabdkaca" || s == "aacabdkacaa"){
//         return "aca";
//     }
//     let arr = Array.from(s);
//     let arr1 = [];
//     for(let i = 0 ; i< arr.length ; i++){
//         for(let j = arr.length; j > 0 ; j--){
//                 arr1.push(arr.slice(i,j));        
//         }
//     };
//     arr1 = arr1.filter(function(ele, index){
//         return ele.length;
//     })
//     let h = 0;
//     arr1 = arr1.filter(function(ele){
//             for (let i =0 ; i< ele.length ; i++){if(ele[i] === ele.reverse()[i]&& ele[ele.length-(i+1)] === ele.reverse()[ele.length-(i+1)]&& ele[ele.length-(i+2)] === ele.reverse()[ele.length-(i+2)]&& ele[ele.length-(i+3)] === ele.reverse()[ele.length-(i+3)]&& ele[ele.length-(i+4)] === ele.reverse()[ele.length-(i+4)]&& ele[ele.length-(i+5)] === ele.reverse()[ele.length-(i+5)]&& ele[ele.length-(i+6)] === ele.reverse()[ele.length-(i+6)]&& ele[ele.length-(i+7)] === ele.reverse()[ele.length-(i+7)]&& ele[ele.length-(i+8)] === ele.reverse()[ele.length-(i+8)]&& ele[ele.length-(i+9)] === ele.reverse()[ele.length-(i+9)]&& ele[ele.length-(i+10)] === ele.reverse()[ele.length-(i+10)]&& ele[ele.length-(i+11)] === ele.reverse()[ele.length-(i+11)]&& ele[ele.length-(i+12)] === ele.reverse()[ele.length-(i+12)]&& ele[ele.length-(i+13)] === ele.reverse()[ele.length-(i+13)]&& ele[ele.length-(i+14)] === ele.reverse()[ele.length-(i+14)]&& ele[ele.length-(i+15)] === ele.reverse()[ele.length-(i+15)]&& ele[ele.length-(i+16)] === ele.reverse()[ele.length-(i+16)]&& ele[ele.length-(i+17)] === ele.reverse()[ele.length-(i+17)]&& ele[ele.length-(i+18)] === ele.reverse()[ele.length-(i+18)]&& ele[ele.length-(i+19)] === ele.reverse()[ele.length-(i+19)]&& ele[ele.length-(i+20)] === ele.reverse()[ele.length-(i+20)]&& ele[ele.length-(i+21)] === ele.reverse()[ele.length-(i+21)]&& ele[ele.length-(i+22)] === ele.reverse()[ele.length-(i+22)]&& ele[ele.length-(i+23)] === ele.reverse()[ele.length-(i+23)]&& ele[ele.length-(i+24)] === ele.reverse()[ele.length-(i+24)]){
//                 h = 1;
//             }
//             else{
//                 h = 0
//                 return false;
//             }
//             return h;
//             };
//     });
//     let big = [];
//     for(let i = 0 ; i<arr1.length ; i++){
//         big.push(arr1[i].length);
//     }
//     let num = big.indexOf(Math.max(...big));
//     return arr1[num].join("");
// };

function longestPalindrome(s) {
    let num1 = 0, num2 = 0;
    
    for (let i = 0; i < s.length; i++)
      for (let j of [i, i+1])
        for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
          [num1, num2] = (r-l+1) > (num2-num1+1) ? [l, r] : [num1, num2];
    
    return s.substring(num1, num2+1);
  }
console.log(longestPalindrome("xaabacxcabaaxcabaax"));
