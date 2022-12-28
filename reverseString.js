/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.trim().split(" ").filter(function(ele){
        return ele !==""
    }).reverse().join(" ");
};
console.log(reverseWords("a good   example"))