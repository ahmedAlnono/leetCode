var isPalindrome = function(x) {
    var arr = Array.from(`${x}`)
    var rev = Array.from(`${x}`).reverse();
    let h =0;
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] === rev[i]){
            h =1;
        }
        else{
            return false;
        }
    }
    return h ===1;
};
console.log(isPalindrome(221))