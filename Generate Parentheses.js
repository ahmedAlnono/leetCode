/**
 * @param {number} n
 * @return {string[]}
 */
//  Input: n = 3
//  Output: ["((()))","(()())","(())()","()(())","()()()"]

// Input: n = 1
// Output: ["()"]
let open = 0; 
let close = 0;
let s  = ""
let ans = [];
 var generateParenthesis = function(n /* , open , close , s , ans*/) {
        if(open == n && close == n){
            ans.push(s);
            return;
        }
        
            if(open < n){
                open +=1;
                s+="{";
            generateParenthesis(n);
        }
        
        if(close < open){
            close += 1
            s+="}";
            generateParenthesis(n);
        }
        console.log(ans)
};
console.log(generateParenthesis(3))