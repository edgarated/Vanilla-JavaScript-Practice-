//FOR USERNAME
let userName = "pencilpen";
let password = "123467383838"

let userChecker = function(myString){
if((myString.includes(123)) && (myString.length > 6))
return true;
else{
  return false;
}

};
console.log(userChecker(userName));

// PRINTS FALSE;
// This means that the users must have numbers 123 included in their username

//FOR PASSWORD
let passChecker = function(pass){
if((pass.includes(1234)) &&(pass.length > 8))
return true;
else{

  return false
}
}
console.log(passChecker(password))

// PRINTS TRUE
//This means  that users must user password longer that 8 characters and the password must be numbers only