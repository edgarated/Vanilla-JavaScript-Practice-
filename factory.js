

//FACTORY FUNCTIONS

// let Factory = function(name,age,location){

//    let temp = {};

//  temp.name = name;
//  temp.location =location;
//  temp.age = age;

//  temp.people = function(){
//     console.log(`My name is ${this.name},I am ${this.age}, and i stay in ${this.location}`)
//   };
//   return temp;
  

// }

// const people1 = new Factory("Pencil pen", 14, "Lagos");
// const people2 = new Factory("Sweet sharpener", 18, "Abuja");
// const people3 = new Factory("Pen book", 34, "Calabar");

// people1.people();
// people2.people();
// people3.people();

// PRINTS  My name is Pencil pen,I am 14, and i stay in Lagos
//  PRINTS My name is Sweet sharpener,I am 18, and i stay in Abuja
//  PRINTS My name is Pen book,I am 34, and i stay in Calabar

// let userName = "123asdfr";
// let password = "1234";

// let user = function(user)
// {
//   if((user.includes("123")) && (user.length > 5)){
// return true;
// }
// else{
//   return false;
// }
// }
// console.log(user(userName));

// let numbers = [2,4,5,6,7,8];
// let multipliedNumbers = numbers.map (p => p * 2);
// let addedNumbers = numbers.map (number => number * 2 + 2);
// console.log(multipliedNumbers);
// console.log(numbers);
// console.log(addedNumbers);

const girls = [
  {name: 'Sarah', age: 19},
  {name: 'Laura', age: 10},
  {name: 'Jessy', age: 29},
  {name: 'Amy', age: 23}];

let girlsAges = girls.map((girl) => girl.name);

console.log(girlsAges);  //[19, 10, 29, 23]


const array = [2, 5, 9];
    let squares = array.map((num) => num * num);

    console.log(squares); // [4, 25, 81]
    console.log(array); // [2, 5, 9]
