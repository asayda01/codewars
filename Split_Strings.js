/*

6 kyu

Split Strings



Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters 

then it should replace the missing second character of 

the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

/*

export function solution(str){
    const arr = [];
    if (str.length % 2 !== 0) {
      str += "_";
    };
    for (let i = 0 ; i<str.length-1;  i = i+2 ) {
      arr.push(str.substring(i,i+2));
    };
    return arr;
};

*/

export function solution(str){
  return ( str + "_" ).match( /.{2}/g ) || [] ;   
};