

//JavaScript CONSTRUCTOR FUNCTIONS

//Declare the constructor function
// let Car = function(driver){
//     this.driver = driver; //this keyword represents the object
//     this.logDriver = function(){
//     console.log(`The name of the driver is ${this.driver}`);
//   }
// }
//     let myCar2 = new Car ( "Pencil Pen");
//     let myCar = new Car ( "Pencil Sharpener");
//     let myCar3 = new Car ( "Pen book");

//     myCar2.logDriver()
//     myCar.logDriver()
//     myCar3.logDriver()

// PRINTS  The name of the driver is Pencil Pen
// PRINTS  The name of the driver is  Pencil Sharpener
// PRINTS  The name of the driver is Pen book

// let name = new String();
// name = "Ebukarr";
// console.log(name.toUpperCase());
//  let details = {
//    name: "ebuka",
//    hobby : "football"
//  }

// let details = new Object();
//hobby = "football";
//name = "ebuka";
//job = "developer";
//location = "lagos",
//hostel = function(){
//   console.log(` I hate to drive under the rain`);
// }

// console.log(details.hostel());


// let details = new Object();
//food = "rice";
//hobby = "dancing";
//something = function(){
//   console.log("how is you?")
// }

// console.log(details.something())


// let details = {
//  food : "rice",
//  hobby :"dancing",
//  something : function(){
//     console.log("how is you? " + this.food);},


//     }

//  console.log(details.hobby)

//  details.something();

// let Name = function (firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.logFirst = function(){
//       console.log(`my first name is ${this.firstName}`)
//     },
//     this.logSecond = function(){
//     console.log(` my last name is ${this.lastName}`) 
  
//     };
// }

// const myName = new Name ("Chukwuebuka", "Aneke");
// const myName2 = new Name ("Aneke","kos");
// myName2.logSecond();
// myName.logFirst();


// function Hobbies (food,cloth,jacket){
//   this.food = food
//   this.cloth = cloth
//   this.jacket = jacket

//   this.feeeer = function(hello, hi,){
// console.log(`how are you ${hello} : ${hi}`)

//   },
//   this.fer = function(){
//     console.log("how are you " + this.cloth)

//       },
//       this.feer = function(){
//         console.log("how are you " + this.jacket)

//           }
//   }


// const hooby1 = new Hobbies( "cassava", "akpu", "orange");
// const hooby2 = new Hobbies("w","d","c");
// const hooby3 = new Hobbies("ccc","xdd","sdf");

// hooby1.feeeer("chukwuebuka","andela")
// hooby2.feer("kuke");
// hooby3.fer("i")




function Name (hobby,location, age){

      this.hobby = hobby;
      this.location = location;
      this.age  = age;

        this.foo = function(){
        console.log(`${this.hobby} ${this.location} ${this.age}`);

        }


      }

const nameChange = new Name ("fishing","lagos",90);
const nameChange2 = new Name ("fishing","lagos",90);
const nameChange3 = new Name ("fishing","lagos",90);
const nameChange4 = new Name ("fishing","lagos",90);
const nameChange5 = new Name ("fishing","lagos",90);
const nameChange6 = new Name ("fishing","lagos",90);
// const nameChange3 = new Name ("fishing","lagos",90);

nameChange.foo();
nameChange2.foo();
nameChange3.foo();
nameChange4.foo();
nameChange5.foo();
nameChange6.foo();
// nameChange3.fook("lagos");



// function createCircle (radius){
// return {radius,
// draw(){
//   console.log("draw");
// }}

// }

// console.log(createCircle()) ;










