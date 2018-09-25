// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse ( str )
{
  if ( str === "" ) { return ""; }

  else
  {
    // --------------------------------------

    // Solution #1 built in reverse method:


    /* You can use .split('') here but i like the spread operator ( the '...' inside [...str] ) */
    // return [ ...str ].reverse().join( '' );

    // --------------------------------------

    //Solution #2 for loop new syntax

    // let newStr = '';
    // for ( let letter of str )
    // {
    //   newStr = letter + newStr;
    // }
    // return newStr;

    // --------------------------------------

    // Solution #3 array iterator

    // const newStr = [];
    // [...str].forEach(element =>
    // { 
    //   newStr.unshift( element );
    // });
    // return newStr.join('');

    // --------------------------------------

    // Solution #4 reduce

    // return [ ...str ].reduce( ( reversed, letter ) =>
    // {
    //   return letter + reversed;
    // });

    // Solution #5 old syntax decreasing for loop 

    // let newStr = '';
    // for (var i = str.length - 1; i >= 0; i--) { 
    //   newStr += str[i]; // or newString = newString + str[i];
    // } 
  
    // return newStr;

    // Solution #6 Recursion

    return reverse( str.substr( 1 ) ) + str.charAt( 0 );
  }
}


module.exports = reverse;
