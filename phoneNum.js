var letterCombinations = function(digits) {
    let nums = [
        {
            char : [' ']
        },
        {},
        {
            char : ['a' , 'b' , 'c']
        },
        {
            char : ['d' , 'e' , 'f']
        },
        {
            char : ['g' , 'h' , 'i']
        },
        {
            char : ['j' , 'k' , 'l']
        },
        {
            char : ['m' , 'n' , 'o']
        },
        {
            char : ['p' , 'q' , 'r' , 's']
        },
        {
            char : ['t' , 'u' ,'v']
        },
        {
            char : ['w' , 'x' , 'y' , 'z']
        }
    ];
    res = [];
    if(digits.length == 0){
        return [];
    }
   else if(digits.length == 1 ){
        return nums[+digits].char;
    }
    else if(digits.length == 2){
        for (let i = 0 ; i < nums[+(digits[0])].char.length ; i++){
            for (let j = 0 ; j< nums[+(digits[1])].char.length ; j++){
              res.push(`${nums[+(digits[0])].char[i]}${nums[+(digits[1])].char[j]}`);
            }
        }
        return res;
    }
    else if (digits.length == 3){
        for (let i = 0 ; i<nums[parseInt(digits[0])].char.length ; i++){
            for (let j = 0 ; j<nums[parseInt(digits[1])].char.length ; j++){
                for (let h =0 ;h <nums[parseInt(digits[2])].char.length ; h++){
                    let item1 = nums[parseInt(digits[0])].char[i];
                    let item2 = nums[parseInt(digits[1])].char[j];
                    let item3 = nums[parseInt(digits[2])].char[h];
                    res.push(`${item1}${item2}${item3}`);
                }
            }
        }
        return res;
    }
    else{
        for (let i = 0 ; i<nums[parseInt(digits[0])].char.length ; i++){
            for (let j = 0 ; j<nums[parseInt(digits[1])].char.length ; j++){
                for (let h =0 ;h <nums[parseInt(digits[2])].char.length ; h++){
                    for(let n = 0 ; n<nums[parseInt(digits[3])].char.length ; n++){
                        let item1 = nums[parseInt(digits[0])].char[i];
                        let item2 = nums[parseInt(digits[1])].char[j];
                        let item3 = nums[parseInt(digits[2])].char[h];
                        let item4 = nums[parseInt(digits[3])].char[n];
                        res.push(`${item1}${item2}${item3}${item4}`);
                    }
                }
            }
        }
        return res;
    }
};
console.log(letterCombinations("2343"));