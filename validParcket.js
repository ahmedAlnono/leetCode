// var isValid = function(s) {
//     if(s.length%2 !==0){
//         return false;
//     }
//     let h = 0;
//     let n = 0;
//     let t = 0;
//     let r = 0
//     let e = 0;
//     let w = 0;
//     for(let j = 0 ; j< s.length ; j++){
//         if(s[j]==="("){
//             for(let g = j+1 ; g < s.length ; g++){
//                 if(s[g] === "[")e +=1;

//                 else if(s[g] === "{")w+=1;

//                 else if(s[g] ==="]")e-=1;

//                 else if(s[g] === "}")w-=1;

//                 else if(s[g] === ")"){
//                     break;
//                 }
//             }
//         }
//         else if(s[j]==="["){
//             for(let g = j+1 ; g < s.length ; g++){
//                 if(s[g] === "("){
//                     r +=1;
//                 }
//                 else if(s[g] === "{"){
//                     w+=1;
//                 }
//                 else if(s[g]===")"){
//                     r-=1;
//                 }
//                 else if(s[g]==="}")w-=1;
//                 else if(s[g] === "]")break;
//             }
//         }
//         else if(s[j]==="{"){
//             for(let g = j+1 ; g < s.length ; g++){
//                 if(s[g] === "("){
//                     r +=1;
//                 }
//                 else if(s[g]==="[")e+=1;
//                 else if(s[g]===")"){
//                     r-=1;
//                 }
//                 else if(s[g]==="]")e-=1;
//                 else if(s[g] ==="}")break;
//             }
//         }
//     }
//     for (let i = 0 ; i < s.length ; i++){
//         if (s[i]==="(" ){
//             h+=1;
//         }
//         else if( s[i] === "["){
//             n +=1;
//         }
//         else if( s[i] === '{'){
//             t +=1;
//         }
//         else if(s[i] === ")" && h<=0){
//            return false;
//         }
//         else if(s[i] === "]" && n<=0){
//             return false;
//         }
//         else if(s[i] ==="}"&& t<=0){
//             return false;
//         }
//         else if(s[i]===")"   && h >0){
//             h-=1;
//         }
//         else if(s[i] === "]" && n >0){
//             n -=1;
//         }
//         else if (s[i] === "}"&& t >0){
//             t-=1;
//         }
//     }
//     console.log(w);
//     console.log(e);
//     console.log(r);
//     return n===0&&t===0&&h===0&&r===0&&e===0&&w===0;
// };
var isValid = function (s) {
    const left = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left.push(s[i]);
        }
        else if (s[i] === ')'  && left.length !== 0 && left[left.length - 1] === '(') {
            left.pop();
        } else if (s[i] === '}'&& left.length !== 0 && left[left.length - 1] === '{') {
            left.pop();
        } else if (s[i] === ']'&& left.length !== 0 && left[left.length - 1] === '[') {
            left.pop();
        }
        else {
            return false;
        }
    }
    return leftSymbols.length === 0;
};
console.log(isValid("[({(())}[()])]"))
// "([)]"
//"[({(())}[()])]"
//"(){}}{"