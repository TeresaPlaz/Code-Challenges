function oddOrEven(array) {

  if (array.length === 0) return "even";
  
  const oddOrEven2 = array.reduce((acc,item) => acc+item,0);
  
  return oddOrEven2 % 2 === 0 ? "even" : "odd";
  }