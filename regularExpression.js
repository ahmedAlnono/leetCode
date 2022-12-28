/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//  '.' Matches any single character.​​​​
//  '*' Matches zero or more of the preceding element.

 var isMatch = function(s, p) {
    if (!p.match(/\?|\*/)) {
        return s === p;
    }
    var regResult = s.match(new RegExp(p.replace()));
    return regResult !== null && regResult[0] === regResult['input'];
};
console.log(isMatch("fd" ,"?d"))