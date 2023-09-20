export function findMissingLetter(array:string[]):string
{
  
  return String.fromCharCode(1 + array.map( x => x.charCodeAt(0) )
                             .reduce( (x, y) => y > x+1 ? x : y) ) ;

};