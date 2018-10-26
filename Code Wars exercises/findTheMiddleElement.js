var gimme = function (inputArray) {
  const maxNum = Math.max(...inputArray);
  const minNum = Math.min(...inputArray);
  
  const middleNum = inputArray.find(item => item !== maxNum && item !== minNum);
  return inputArray.indexOf(middleNum);
};