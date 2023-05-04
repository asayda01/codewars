/*

5 kyu
Human Readable Time

Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


*/

function humanReadable (seconds) {
  
    let HH =   Math.trunc (     seconds   / ( 60 * 60 ) )          ;
    let MM =   Math.trunc ( (   seconds   % ( 60 * 60 ) ) / 60 )   ;
    let SS =   Math.trunc ( ( (  seconds  % ( 60 * 60 ) ) % 60 ) ) ;
    
    HH < 10 ? HH = "0" + String(HH) : HH
    MM < 10 ? MM = "0" + String(MM) : MM
    SS < 10 ? SS = "0" + String(SS) : SS
    
    return `${HH}:${MM}:${SS}`;
    
};