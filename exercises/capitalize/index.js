// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize ( str )
{
  //Solution #1 own solution
  // SplitStr = [ ...str ];
  // CapitalStr = "";

  // for (const index of SplitStr.keys())
  // {
  //   if ( SplitStr[ index - 1 ] === " " || index === 0 )
  //   {
  //     CapitalStr += SplitStr[index].toUpperCase();
  //   }
  //   else
  //   {
  //     CapitalStr += SplitStr[index];
  //   }
  // }
  
  // return CapitalStr;

  //Solution #2

  // const words = [];

  // for (let word of str.split(" "))
  // {
  //   words.push( word[ 0 ].toUpperCase() + word.slice( 1 ) );
  // }

  // return words.join(" ");

}

module.exports = capitalize;
