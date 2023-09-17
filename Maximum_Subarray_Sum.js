var maxSequence = function(arr){
  
    let currTot = 0;
    let maxTot = 0;
    
    for (const i of arr) {
      
      currTot += i;
      
      if ( maxTot < currTot) {
        maxTot = currTot;
      };
      
      if ( currTot < 0 ) {
        currTot = 0;
      };
      
    };
    
    return maxTot;
  
};