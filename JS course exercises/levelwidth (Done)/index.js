// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth ( root )
{
  const newArr = [ root, "limit" ];
  const arrLength = [0];
    
  while ( newArr.length > 1 )
  {
    const node = newArr.shift();
    
    if ( node === "limit" )
    {
      arrLength.push( 0 );
      newArr.push( "limit" );
    }
    else
    {
      newArr.push( ...node.children );
      arrLength[ arrLength.length - 1 ]++;
    }
  }
    
  return arrLength;
}

module.exports = levelWidth;