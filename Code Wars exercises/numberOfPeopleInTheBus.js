var number = function(busStops)
{
  const peopleLeft = busStops.reduce(( acc, element) => { return acc + element[0] - element[1] }, 0 );
  // Good Luck!
  return peopleLeft;
}