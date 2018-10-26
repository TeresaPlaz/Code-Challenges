function countPositivesSumNegatives(input) {
  let acc1 = 0;
  let acc2 = 0;
     
     if (!input || input.length === 0) {return [];}
    else 
    {   
     const newArr = input.map(element => element > 0 ? acc1 += 1 : acc2 += element  );
  
     return [acc1,acc2]; 
     }
    
  }