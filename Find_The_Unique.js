/*

6 kyu

Find The Unique 

There is an array. All elements are the same except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 4, 4, 'foo', 4 ]) === 'foo'

It’s guaranteed that array contains more than 3 elements. Array may contain anything (including NaN).

This is the third kata in series:

    Find the unique number
    Find the unique string
    Find The Unique (this kata)

*/

export function findUniq(arr) {
    return arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x) );
  };
  
  
  console.log ( findUniq([ 1, 1, 1, 2, 1, 1 ])    );
  console.log ( findUniq([ 4, 4, 'foo', 4 ])    );
  