function XO(str) {
  const num = [...str].reduce(( acc,element ) => { 
  if (element.toLowerCase() === "x") {acc++} 
  else if (element.toLowerCase() === "o") {acc--}
  return acc;
  }, 0);

  return num === 0 ? true : false;
}