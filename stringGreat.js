var makeGood = function(s) {
    let arr = Array.from(s);
    let arr1 = [];
    let upper = arr.filter(function(ele , index){
        return ele !== ele.toLowerCase();
    });
    for (let i = 0 ; i<upper.length ; i++){
        if(arr[arr.indexOf(upper[i].toString().toLowerCase())]&&
        (arr.indexOf(upper[i].toString().toLowerCase()) == arr.indexOf(upper[i].toString())+1
        )){
        delete arr[arr.indexOf(upper[i].toString().toLowerCase())];
        delete arr[arr.indexOf(upper[i].toString())];
        arr1 = arr.filter(Boolean);
        }
        else if(arr.indexOf(upper[i].toString().toLowerCase()) === arr.indexOf(upper[i].toString())+1){
            delete arr[arr.indexOf(upper[i].toString().toLowerCase())];
            delete arr[arr.indexOf(upper[i].toString())];
            arr1 = arr.filter(Boolean);
        }
    }
    arr1 = arr.filter(Boolean);
    for(let i = 0;i<arr1.length-1;i++){
        if(arr1[i] == arr1[(i+1)].toUpperCase()){
            delete arr1[i];
            delete arr1[i+1];
            arr1 = arr1.filter(Boolean);
        }
    }
    return arr1.join('');
}
console.log(makeGood("FcoCf"));









// var makeGood = function(s) {
//     let arr = Array.from(s);
//     for(let j = 0 ; j <arr.length ; j++){
//     for (let i = 0 ; i<arr.length ; i++){
//         if(arr[i].toUpperCase() === arr[i]+1 && arr !== []){
//         delete arr[i];
//         delete arr[i+1];
//         arr = arr.filter(Boolean);
//     }
//     else if(arr[i] === arr[i+1] && arr !== []){
//             delete arr[i];
//             delete arr[i+1];
//             arr = arr.filter(Boolean);
//         }
//     }}
//     let arr1 = arr.filter(Boolean);
//     return arr1.join('');
// }
