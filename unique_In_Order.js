/*

export const uniqueInOrder=function(iterable){
  
    let arr = [];
    
    for (let i = 0; i<iterable.length-1; i++) 
    {
      if ( (iterable[i] !== iterable[i+1])   ) 
      {
        arr.push ( iterable[i] )
      }
    };
    
    if (arr[arr.length-1] !==  iterable[iterable.length-1]) 
    {
      arr.push ( iterable[iterable.length-1] )
    };
    
    return arr;
    
  };

*/

/*

export const uniqueInOrder=function(iterable){
  
    let arr = [];
    let temp;
    
    for ( let i = 0; i < iterable.length; i++ ) {
      if ( iterable[i] !== temp ) {
        arr.push( temp = iterable[i] );
      }
    };
    
    return arr;
  
  };

*/

export const uniqueInOrder = function (iterable) {
    return [...iterable].filter((element, index) => element !== iterable[ index-1 ] ) ;
};