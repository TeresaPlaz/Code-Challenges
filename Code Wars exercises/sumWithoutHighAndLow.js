function sumArray(array) {
  if (!array || array.length < 2)  {return 0;}
  
  let sum = array.sort((a,b) => a - b);
  sum.pop(); 
  sum.shift();
  sum = sum.reduce( (acc,element) => { return acc + element }, 0);
  
  return sum;
 }