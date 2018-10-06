// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid ( n )
{

  //Solution #1 String
  //   for ( let row = 0; row < n; row++ )
  // {
  //   let stair = "";
  //   for ( let column = 0; column < n; column++ )
  //   {
  //     if ( column === 0 )
  //     {
  //       stair += "#";    
  //     }
  //     else if (column <= row)
  //     {
  //       stair = `#${ stair }#`;
  //     }
  //     else
  //     {
  //       stair = ` ${ stair } `;  
  //     }
  //   }

  //   console.log( stair );
  //   }
  
  //Solution #2 Array

 for (i = 1; i <= n; i++) {
    let arr = [];
    for (y = 0; y < n; y++) {
        if (y == 0) {
            arr.push('#');
        } else if (y >= i) {
            arr.push(" ");
            arr.unshift(" ");
        } else {
            arr.push("#");
            arr.unshift("#");
        }
    }
    console.log(arr.join(""));
}

}

module.exports = pyramid;
