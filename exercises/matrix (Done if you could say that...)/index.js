// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix ( n )
{
    const OuterArr = [];
    let startColumn = 0;
    let endColumn = n -1;
    let startRow = 0;
    let endRow = n - 1;
    let Counter = 1;
  
  for ( let y = 1; y <= n; y++ )
  {
    OuterArr.push( [] );  
  }
  while (startColumn <= endColumn && startRow <= endRow)
  {
    // Top Row
    for ( let TopRowIndex = startColumn; TopRowIndex <= endColumn; TopRowIndex++ )
    {
      OuterArr[ startRow ][ TopRowIndex ] = Counter;
      Counter++;
    }
    startRow++;

    // Right Column
    for ( let RightColumnIndex = startRow; RightColumnIndex <= endRow; RightColumnIndex++) {
      OuterArr[ RightColumnIndex ][ endColumn ] = Counter;
      Counter++;
    }

    endColumn--;

    //Bottom row
    for ( let BottomRowIndex = endColumn; BottomRowIndex >= startColumn; BottomRowIndex--)
    {
      OuterArr[ endRow ][ BottomRowIndex ] = Counter;
      Counter++;
    }

    endRow--;

    //Left Column
    for ( let LeftColumn = endRow; LeftColumn >= startRow; LeftColumn--)
    {
      OuterArr[ LeftColumn ][ startColumn ] = Counter;
      Counter++;
    }

    startColumn++;


  }

  return OuterArr;
}

module.exports = matrix;
