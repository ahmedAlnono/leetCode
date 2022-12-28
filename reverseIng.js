var reverse = function(x) {
    let num;
    if(x>0){
        num =Array.from(x.toString()).reverse().join('');
        if(+num < Math.pow(2,31)){
            return +num;
        }
        else{
            return 0;
        }
        }
    
    else {
        let n = -x;
        num =Array.from(n.toString()).reverse().join('');
        if(-num > Math.pow(-2,31)){
            return -num;
        }
        else{
            return 0;
        }
        }
    };
console.log(reverse(-123));