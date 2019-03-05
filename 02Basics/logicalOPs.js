// && - AND operator  - both sides needs to be true
// || - OR operator  - one side needs to be true


let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(!isVerified && isLoggedIn && hasPaymentToken){
  console.log(" Hello, welcome ")
  console.log(" Access Granted! ")
} else if (isVerified || isGuest){
  console.log( "Allow free previews only")
}else{
  console.log("please contact the ADMIN")
}