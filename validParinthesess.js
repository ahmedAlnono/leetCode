const longestValidParentheses = function(s) {
    if(s===""){
        return 0;
    }
    let arr = Array.from(s);
    let open = [];
    let close = [];
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] === "("){
            open.push({index : i})
        }
        else if(arr[i] === ")"){
            close.push({index:i});
        }
    }
    let h = 0;
    if(open.length >= close.length){
        for(let i = 0 ; i<close.length ; i++){
            if(open[i].index < close[i].index){
                h +=2;
            }
        }
    }
    else if(close.length > open.length){
        for(let i = 0 ; i < open.length ; i++){
            for(let j = 0 ; j< close.length ; j++){
                if(open[i].index < close[j].index){
                    h+=2;
                    break;
                }
            }
        }
    }
    return h;
};

console.log(longestValidParentheses("()(()"))