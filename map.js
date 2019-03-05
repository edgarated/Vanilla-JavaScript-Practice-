

// ARRAY.MAP()
const girls = [
  {name: 'Sarah', age: 19},
  {name: 'Laura', age: 10},
  {name: 'Jessy', age: 29},
  {name: 'Amy', age: 23}];

let girlsNames = girls.map((girl) => girl.name);
console.log(girlsNames);

// PRINTS [ 'Sarah', 'Laura', 'Jessy', 'Amy' ]


// ARRAY.FILTER()
let number = [4,5,6,8,9]
let filterNumbers = number.filter((number => number > 6 && number < 10));
console.log(filterNumbers);

// PRINTS [ 8, 9 ]


// ARRAY.REDUCE()
let adds = [4,5,7,9,89,7];
let added = adds.reduce((num,val)=> num + val);
console.log(added);

// PRINTS 121

