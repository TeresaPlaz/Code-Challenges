function findSum(n) {
  
  let newArr = [0,...Array(n)].reduce((acc, item,index) => {
  if (index % 3 === 0 || index % 5 === 0) {acc +=index }
  return acc;
  }, 0);
  
  return newArr;
 }