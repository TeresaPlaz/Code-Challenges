// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome ( str )
{
  //You can use any of the reverse string solutions adding the check between the str parameter (original string) and the reversed string
  // i chose the for because it's simpler to take into account the spaces
 
    let newStr = '';
    for ( let letter of str )
    {
      newStr = letter + newStr;
    }
   
  if ( newStr === str ) { return true; }
  else { return false;}

 


}

module.exports = palindrome;
