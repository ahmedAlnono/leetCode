var myAtoi = function(s) {
    let str = s.trim();
    let num = parseInt(str);
    if(isNaN(num)){
        return 0;
    }
    else if(num<Math.pow(2,31)-1&&num>Math.pow(-2,31)-1){
        return num;
    }
    else if(num >= Math.pow(2, 31)-1){
        return Math.pow(2,31)-1;
    }
    else{
        return Math.pow(-2, 31);
    }
};
console.log(myAtoi("2147483647"));
