/*

5 kyu

Find the unique string

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

    Find the unique number
    Find the unique string (this kata)
    Find The Unique

*/

export function findUniq(arr) {
    const list = arr.map(str=>[...new Set(str.toLowerCase())].sort().join``),
          pot = list[0],
          pos = list.findIndex(str=> str !== pot);
    return pos==1 && list[2]!==pot ? pot : arr[pos];
  };

/*

const getUnique = (x, i, arr) => arr.indexOf(x) === arr.lastIndexOf(x);
const getUniques = (x) => [...new Set([...x.toLowerCase()].sort())].join('');
const findUniq = (arr) => arr[arr.map(getUniques).findIndex(getUnique)];

*/