function findMissingLetter(array)
{
  let i=array[0].charCodeAt();
  array.map(x=>  x.charCodeAt()==i?i++:i);
  return String.fromCharCode(i);
};
