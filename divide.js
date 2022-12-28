var divide = function(dividend, divisor) {
    if(dividend/divisor > Math.pow(2,31)-1){
        return Math.pow(2,31)-1;
    }
    else if(dividend/divisor < Math.pow(-2 , 31)){
        return Math.pow(-2 , 31);
    }
    else
    return (Math.trunc(dividend/divisor));
};
console.log(divide(7,-3))