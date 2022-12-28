/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  Input: s = "egg", t = "add"
//  Output: true

// Input: s = "foo", t = "bar"
// Output: false

// Input: s = "paper", t = "title"
// Output: true

 var isIsomorphic = function(s, t) {
    for(let i = 0 ; i < s.length ; i++){
        for(let j = 0 ; j < s.length ; j++){
            if(i !== j && s[i] === s[j] && t[i] === t[j]){
                // h=1;
            }
            else if(i !== j && s[i] !== s[j] && t[i] !== t[j]){
                // h=1;
            }
            else if(i === j){
            }
            else {
                return false;
            }
        }
    }
    return true;
};
console.log(isIsomorphic("foo" , "bar"));