// let todo = {
// today: "wednesday",
// meeting : 0,
// meetingDone : 0,
// }

// let addMeeting = function (addMeeting, meet = 0){
//  addMeeting.meeting = addMeeting.meeting + meet;
// }

// let meetingDone = function (addMeeting, meet = 0){

//   addMeeting.meetingDone =  addMeeting.meetingDone - meet;
// }

// let resetMeeting = function(addMeeting){
//   addMeeting.meeting = 0;
//   addMeeting.meetingDone = 0;
// }

// let meetingSummary  = function(addMeeting){
// let fullMeeting =  addMeeting.meeting  +  addMeeting.meetingDone ;
// return `you have ${fullMeeting} meetings sir`
// }

// addMeeting(todo, 7);
// meetingDone(todo, 4);

// console.log(meetingSummary(todo));


// let todo = {
// today: "wednesday",
// meeting : 0,
// meetingDone : 0,
// func : function(){
// return this.today;
// },
// funce :function(){
//   return  this .meeting
//   },
// }
// console.log(todo.func())
// console.log(todo.funce())



// let todo = {
// today: "wednesday",
// meeting : 0,
// meetingDone : 0,

// addMeeting : function(){
//  console.log(this);
// }
// }


// let todoe = {
// today: "friday",
// meeting : 3,
// meetingDone : 0,

// addMeeting : function(){
//  console.log(this);
// }
// }


// todo.addMeeting();
// todoe.addMeeting();




// let todo = {
// today: "wednesday",
// meeting : 0,
// meetingDone : 0,

// meetings : function(num){
// this.meeting = this.meeting + num
// },

// meetingDones : function(num){
// this.meetingDone = this.meetingDone - num
// },

// meetReset : function(){
// this.meeting = 0;
// this.meetingDone = 0;

// }

// summary : function(){
//   let sumMeet = this.meeting - this.meetingDone;
// return `You have ${sumMeet} number of meetings today`

// }

// }
// todo.meetings(4);
// todo.meetingDones(1);
// console.log(todo.summary());

// let todo = {
//   today: "wednesday",
//   meeting : 0,
//   meetingDone : 0,}


//   let addMeeting = function(addMeetings,num = 0){
//     addMeetings.meeting = addMeetings.meeting + num;
//   }

//   let meetDone = function(addMeetings,num = 0){
//     addMeetings.meetingDone = addMeetings.meetingDone + num;
//   }

//   let meetReset = function(){
//     addMeetings.meeting = 0;
//     addMeetings.meetingDone = 0;

//   }

//   let sumMeet = function(addMeetings){
//    let allMeeting = addMeetings.meeting + addMeetings.meetingDone;
//    return `you have ${allMeeting} today`;

//   }
//   addMeeting(todo,8);
//   meetDone(todo, 2)
//   console.log(sumMeet(todo));




// let todo = {
// today: "friday",
// meeting : 0,
// meetingDone : 0,
// meetingPending : 0,
// meetingLost : 0,
// meetingHost: 0,
// fireMeeting:0,


// addFire:function(num){this.fireMeeting = this.fireMeeting + num;
// },

// addmeeting : function(num = 0){
//   this.meeting = this.meeting + num

// },

// subMeetingDone:function(num = 0){
// this.meetingDone = this.meetingDone - num;
// },

// meetPending :function(num = 0){
// this.meetingPending = this.meetingPending - num;

// },

// lostMeeting:function(num = 0){
// this.meetingLost = this.meetingLost + num;
// },
// iHost:function(num = 0){
// this.meetingHost = this.meetingHost + num;
// }
// ,

// summary: function(){
//   let allMeeting = this.meeting + this.fireMeeting+ this.meetingDone + this.meetingPending + this.meetingLost + this.meetingHost;
//   return ` you have ${allMeeting} meetings today`
// }

// }

// todo.addmeeting(8);
// todo.addFire(2);
// todo.iHost(3);
// todo.subMeetingDone(4);
// todo.meetPending(3);
// todo.lostMeeting(4);
// console.log(todo.summary())





let todo = {
today: "friday",
meeting : 0,

addMeeting: function(num = 0){
this.meeting  = this.meeting + num;
},

summary:function(){
return `this is the number ${this.meeting}`

}

}
todo.addMeeting(4)
console.log(todo.summary());








