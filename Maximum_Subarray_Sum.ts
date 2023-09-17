const max_Sequence = (arr:any):number =>{

    let min:number = 0, ans:number = 0, sum:number = 0;

    for (let i:number = 0; i < arr.length; ++i) {

      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);

    };

    return ans;

};