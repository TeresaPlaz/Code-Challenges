// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels ( str )
{
  
  //Solution #1 Switch
  // let vowel = 0;
  // [ ...str ].forEach( (item) =>
  // {
  //   switch (item.toLowerCase())
  //   {
  //     case "a": vowel += 1;
  //     break;
  //     case "e": vowel += 1;
  //     break;
  //     case "i": vowel += 1;
  //     break;
  //     case "o": vowel += 1;
  //     break;
  //     case "u": vowel += 1;
  //     break;
  //   }
  // } );

  // return vowel;

  //Solution #2 Regex
  const vowels = str.match( /[aeiou]/gi );
  return vowels ? vowels.length : 0;
  

  //Solution #3
  // let regex = /[aeiou]/gi;
  // if ( !str.match( regex ) )
  // { return 0; }
  // else
  // { return str.match( regex ).length; }

}

module.exports = vowels;
