function spyKids ( array )
{
  
  //First solution with objects
  let obj = convertToObj(array)

  console.log(obj)

  let origin = findOrigin(obj);

  let arra = [];

  arra.push(origin)

  return snake(obj, origin, arra);

}


function snake(obj, origin, arr){

  if(obj[origin]){
    arr.push(obj[origin]);
  } else {
    return arr;
  }
  
  return snake(obj, obj[origin], arr);

}


function findOrigin(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let origin;

  keys.forEach(e => {
    if(values.indexOf(e) === -1){
      origin = e
    }
  })

  return origin
}



function convertToObj(arr){

  let obj = {};

  arr.forEach(e => {
    obj[e[0]] = e[1];
  })

  return obj

}

let ex1 = [["CEB", "TAC"], ["MNL", "TAG"], ["TAG", "CEB"], ["TAC", "BOR"]]

let ex2 = [["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]


spyKids(routes3);