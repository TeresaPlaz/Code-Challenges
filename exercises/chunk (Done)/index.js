// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk ( array, size )
{

  //Solution #1 first thing i came up with, now i'm gonna optimize it

  // const newArr = [];
  // let chunk = [];
  // let i = array.length;
  // array.forEach( element =>
  // {
  //   chunk.push( element );

  //    if ( chunk.length === size )
  //    {
  //      newArr.push( chunk );
  //      chunk = [];
  //    }
  //    else if (i === 1)
  //    {
  //      newArr.push( chunk );
  //   }
  //   i--; 
  //  } );
  
  // return newArr;

  //Solution #2 using a subArray with reference to the original, i would say this is more optimized but harder to follow through

  // const newArr = [];

  // array.forEach( element =>
  // {
  //   //assign a reference of newArr to the "subArray" variable, uses the length - 1 to check is there is something inside the newArr array
  //   // each iteration it takes the last element of newArr and modifies it with altering the outer array
  //   let subArray = newArr[ newArr.length - 1 ];

  //   //if there is nothing inside "subArray" or it already has the size value to push the chunk, it pushes the current element inside an array to newArr
  //   if ( !subArray || subArray.length === size )
  //   {
  //     //because it pushes the element as an array you can modify the subarray inside newArr  
  //     newArr.push( [ element ] );
  //   }
  //   else
  //   {
  //     // if "subArray" doesn't have the size to be a full chunk equal to the given size then it pushes the current element to "subArray" but because it's
  //     // a reference to newArr, it also pushes the element to the subarray in newArr, so if newArr was [[1]] and we push 2 to the subArray then
  //     // subArray becomes [1,2] and newArr [[1,2]]
  //     subArray.push( element );
  //   }
    
  // } );
  
  // return newArr;

  //Solution #3 Slice, this is definitely more easy to follow through and more optimized i believe. Maybe it's not something i would come up instantly
  // but i think it's worth practicing

  // const newArr = [];
  // let i = 0;
  // while (i < array.length)
  // {
  //   newArr.push( array.slice( i, i + size ) );
  //   i += size;
  // }


  // return newArr;
}

module.exports = chunk;
