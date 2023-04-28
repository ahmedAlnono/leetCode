var romanToInt = function (s) {
    var result = 0;
    for (var i = 0; i < s.length; i++){
        if(`${s[i]}${s[i+1]}` === 'CM' ){
        result += 900;i++;continue;
    }
     else if(`${s[i]}${s[i+1]}` === 'CD'){
        result +=400;i++;continue;
    }else if (`${s[i]}${s[i+1]}` === 'XC'){
        result += 90;i++;continue;
    }else if(`${s[i]}${s[i+1]}` === 'XL'){
        result += 40;i++;continue;}else if (`${s[i]}${s[i+1]}` === 'IV'){
            result += 4;i++;continue;
        }else if(`${s[i]}${s[i+1]}` === 'IX'){
            result += 9;i++;continue;
        }else{switch (s[i]) {
            case 'I':
                result += 1;
                break;
                case 'V':
                    result += 5;
                    break;
                case 'X':
                    result += 10;
                    break;
                case 'L':
                    result += 50;
                    break;
                case 'C':
                    result += 100;
                    break;
                case 'D':
                    result += 500;
                    break;
                case 'M':
                    result += 1000
                    ;break;
                }}}
                return result;};