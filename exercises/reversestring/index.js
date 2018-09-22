// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse ( str )
{

  // Solution #1 built in reverse method:
  // return [ ...str ].reverse().join( '' );

  //Solution #2 for loop new syntax
  let newStr = '';
  for ( let letter of str )
  {
    newStr = letter + newStr;
  }
  return newStr;

  // Solution #3 array iterator
  // const newStr = [];
  // [...str].forEach(element =>
  // { 
  //   newStr.unshift( element );
  // });
  // return newStr.join('');
}


module.exports = reverse;
