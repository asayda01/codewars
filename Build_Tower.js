/*

6 kyu

Build Tower

Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

Go challenge Build Tower Advanced once you have finished this :)

*/

/*

export function towerBuilder(nFloors) {
  let arr = [] ;
  for ( let i = 0 ; i< nFloors ; i++){
    arr.push( " ".repeat(nFloors - i - 1) +
    "*".repeat( ( i * 2 ) + 1 )    + 
    " ".repeat(nFloors - i - 1) );    
  };
  return arr;
};

*/

export function towerBuilder(nFloors) {
    return Array.from( { length : nFloors }, function(value, index) {
      const space  = ' '.repeat( nFloors - index - 1 );
      return space + '*'.repeat( index + index + 1 ) + space;
    });
};

