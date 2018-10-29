function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  

  roman = roman.split('').reverse();
  
  let num = roman.reduce( ( acc, item, index ) =>
  {
    item = convertSym( item );
    let previousItem = convertSym( roman[ index - 1 ] );
    return index
      ? previousItem > item
        ? acc - item
        : acc + item
      : acc + item;
  }, 0 );
  return num;
}

function convertSym(sym){
 switch(sym){
   case "I" : return 1; break;
   case "V" : return 5; break;
   case "X" : return 10; break;
   case "L" : return 50; break;
   case "C" : return 100; break;
   case "D" : return 500; break;
   case "M" : return 1000; break;
 }
}