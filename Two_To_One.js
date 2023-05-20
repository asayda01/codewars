/* 

7 kyu
Two to One

Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible,
 containing distinct letters - each taken only once - 
 coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {

    let arr = [];

    let arr_s1 = s1.split("").sort();
    let arr_s2 = s2.split("").sort();

    arr = arr_s1.concat(arr_s2);

    let set1 = new Set(arr);
    let arr_result = [...set1];

    arr_result.sort();
    return arr_result.join("");

};
