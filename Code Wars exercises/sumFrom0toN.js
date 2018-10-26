const SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(n) {
  if (n === 0) return `0=0`;
  if (n < 0) return `${n}<0`;
    const result = [ 0, ...Array( n ) ].reduce( ( acc, _, index ) => { return acc + index;},0);
    const string = [0,...Array(n)].reduce((acc,_,index) => { return acc.toString()+`+${index}`}); 
    return `${string} = ${result}`;
  };

  return SequenceSum;

})();