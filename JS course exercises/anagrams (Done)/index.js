// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams ( stringA, stringB )
{
  // Solution #1 too many loops though

  // const newObj1 = newObject( stringA );
  // const newObj2 = newObject( stringB );

  // if ( Object.keys( newObj1 ).length !== Object.keys( newObj2 ).length )
  // {
  //   return false;
  // }
  
  // else
  // {

  //   for ( let i in newObj1 )
  //   {
  //     if ( newObj2[i] !== newObj1[i])
  //     {
  //       return false;
  //     }
  //   }

  //   return true;
  // }

  //Solution #2

  // let regex = /[^\w]/g; 
  // let str1d = stringA.replace( regex, "" ).toLowerCase();
  // let str2d = stringB.replace( regex, "" ).toLowerCase();

  // if (str1d.length !== str2d.length){
  //   return false;
  // }
  
  // let objMatch = {};

  // for (let i = 0; i < str1.length; i++) {
  //   if(!objMatch[str1d[i]]) {
  //     objMatch[str1d[i]] = 1;  
  //   } else {
  //     objMatch[ str1d[ i ] ] += 1; 
  //   }

  //     if(!objMatch[str2d[i]]) {
  //     objMatch[str2d[i]] = -1;  
  //   } else {
  //       objMatch[ str2d[ i ] ] -= 1; 
  //   }
  // } 

  // for (var key in objMatch) {
  //   if(objMatch[key] !==0) {
  //     return false;
  // }
  //
  // }
  // return true;

  //Solution #3

  return cleanStr( stringA ) === cleanStr( stringB );

}


//Part of solution #1 
// function newObject ( string )
// {
//   let newObj = {};
//   [ ...string.replace(/[^\w]/g), "" ].forEach( ( element ) =>
//   {
//     newObj[ element ] = newObj[ element ] + 1 || 1;
//   } );

//   return newObj;
// }

//Part of solution #3
function cleanStr ( str )
{
  return str.replace( /[^\w]/g, "" ).toLowerCase().split( "" ).sort().join( "" );
}

module.exports = anagrams;
