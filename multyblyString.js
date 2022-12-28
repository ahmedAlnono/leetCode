// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
//  var multiply = function(num1, num2) {
//     return (+num1 * +num2).toString()
// };
// console.log(multiply("123456789","987654321"))


var multiply = function(num1, num2) {

let n1 = num1;
let n2 = num2;
 
if (num1[0] == '-' && num2[0] != '-') {
    num1 = num1.substring(1);
}
else if (num1[0] != '-' && num2[0] == '-') {
    num2 = num2.substring(1);
}
else if (num1[0] == '-' && num2[0] == '-') {
    num1 = num1.substring(1);
    num2 = num2.substring(1);
}
 
let s1 = num1.split("");
let s2 = num2.split("");
 
s1.reverse();
s2.reverse();
 
let arr = new Array(s1.length + s2.length).fill(0);

for (var i = 0; i < s1.length; i++)
{
 
    for (var j = 0; j < s2.length; j++) {
        arr[i + j] = arr[i + j] + (parseInt(s1[i]) * (parseInt(s2[j])));
    }
}
let product = "";

for (var i = 0; i < arr.length; i++) {
    let digit = arr[i] % 10;
    let carry = Math.floor(arr[i] / 10);
    if (i + 1 < arr.length) {
        arr[i + 1] = arr[i + 1] + carry;
    }
    product = digit.toString() + product;
}

while (product.length > 1 && product[0] == '0') {
    product = product.substring(1);
}
 
if (n1[0] == '-' && n2[0] != '-') {
    product = "-" + product;
}
else if (n1[0] != '-' && n2[0] == '-') {
    product = "-" + product;
}
return product.toString()
};
console.log(multiply("987654321" , "123456789"))