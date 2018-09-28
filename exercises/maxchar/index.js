// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar ( str )
{
  // Stores the characters with a counter
  const newObj = {};

  // Stores the maximun amount of repetitions
  let max = 0;

  //Stores the character with the most repetitions
  let maxCh;

  // Turns the string into a array to loop through it
  [ ...str ].map( ( element ) =>
  {

    // Checks if the character already exist inside the new object, if it does it adds 1 to the counter if not
    //it creates it with a value of 1
    newObj[ element ] = newObj[ element ] + 1 || 1;

    // Checks if the current character is greater than the max variable which stores the maximun counter
      if ( newObj[ element ] > max )
      {
        // if it does then max stores the new maximun and maxCh stores the actual character
        max = newObj[ element ];
        maxCh = element;
      }
  } );

  return maxCh;
}

module.exports = maxChar;
