/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let h = 0;
    for(let i = 0 ; i< strs[0].length ; i++){
        for(let j = 0 ; j < strs.length ; j++){
            if(strs[0][i] === strs[j][i]){
                h = i+1;
            }
            else {
                h = i;
                // i = strs.length;
                return strs[0].slice(0 , h);
                
            }
        }
    }
    return strs[0].slice(0 , h);
    
};
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))
