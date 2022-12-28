/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs){
    if(strs.length === 1){
        return [[strs[0]]]
    }
    let arr = [];
    let n = 0;
    for (let i = 0; i < strs.length ; i++){
        for(let j = 0 ; j < strs.length ; j++){
            if(
            Array.from(strs[i]).sort().join("") === Array.from(strs[j]).sort().join("")
            && i!==j){
                    if(n ===0){
                        arr.push([strs[i] , strs[j]])
                        strs[j] = "0";
                        n=1;
                    }
                    else {
                        arr[i].push(strs[j])
                        strs[j] = "0";
                        console.log(true)
                    }
                }   
                else if(strs[i] === "0"){
                    break;
                }
                else if(j === strs.length-1
                &&Array.from(strs[i]).sort().join("") !== Array.from(strs[j]).sort().join("")){
                    arr.push([strs[i]]);
                }
                else if(strs[i] !== "0" && j ===strs.length-1&&n!==1){
                    arr.push([strs[i]])
                }
        }
       n = 0; 
    }
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[i][0] ===arr[j][0]  &&i!==j){
                arr[j] = 0;
            }
        }
    }
    arr = arr.filter(function(ele){
        return ele !== 0&&ele!=="0"
    })
    return arr;
};
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]))