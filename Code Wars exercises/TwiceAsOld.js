function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here, Сalculate how many years 
  //ago the father was twice as old as his son (or in how many years he will be twice as old).
  
  if (dadYearsOld > sonYearsOld*2) 
    {
  return dadYearsOld - sonYearsOld*2;
    }
  else if (dadYearsOld === sonYearsOld*2) 
    {
  return 0;
    }
  else if (dadYearsOld < sonYearsOld*2) 
    {
     return sonYearsOld*2 - dadYearsOld; 
    }
    
  }