/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
//  Input: s = "barfoothefoobarman", words = ["foo","bar"]
//  Output: [0,9]

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]


// Input: s = "wordgoodgoodgoodbestword", 
// words = ["word","good","best","word"]
// output: []


// s is the string 
// words is the array

// 0 , 2  | 3,5

var findSubstring = function(s, words) {
    let arr=[];
    let str;
    let wordLen = words[0].length;
    let theWords;
    let theS;
    let str1;
    for(let i = 0 ; i < words.length; i++){
       for(let j = 0 ; j < s.length ; j++){
            str = s.slice(j, j+wordLen)
            if(str === words[i]){
                theWords = words;
                theS = s.slice(j , s.length);
                for(let n = 0 ; n < theS.length ; n++){
                    str1 = theS.slice(n , n+wordLen);
                    for(let t = 0 ; t<theWords.length ; t++){
                        if (t === i){
                            continue;
                        }
                        else if(theWords[t] === str1 && t === theWords.length-1){
                            arr.push(theWords[t]);
                            n+= wordLen;
                            console.log(arr);
                            return arr;
                        }
                        else if(theWords[t] === str1){
                            arr.push(theWords[t]);
                            console.log(theWords);
                            n+=wordLen;
                            break;
                        }
                    }
                }
            }
        }
    }
    console.log(arr);
}; 

findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]);