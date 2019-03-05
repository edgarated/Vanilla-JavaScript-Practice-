// let myTodo = {
//   day: "Monday",
//   meetings: 0,
//   meetDone : 0,
// }

// let addMeeting = function (todo, meet = 0){
//   todo.meetings = todo.meetings + meet
// }

// let meetDone = function (todo , meet  = 0){

//   todo.meetDone = todo.meetDone - meet
// }

// let resetDay = function (todo){

// todo.meetings = 0;
// todo.meetDone = 0;

// }
// let summaryOfTheDay = function(todo){
// let meetLeft = todo.meetings - todo.meetDone;
// return `You have ${meetLeft} number of meetings today`
// }
// addMeeting(myTodo, 4)
// addMeeting(myTodo, 2)
// meetDone(myTodo, 5)
// summaryOfTheDay(myTodo);

// console.log(myTodo);
// console.log(summaryOfTheDay(myTodo));


let mytodo = {
  day : "Wednesday",
  meeting : 0,
  meetingDone : 0,
}
//created a function for the "meeting" value
let addMeeting = function(addMeeting, meeting = 0){
 addMeeting.meeting = addMeeting.meeting + meeting;
}
//created a function for the "meetingDone" value
let addMeetingDone = function(addMeeting, meeting = 0){
addMeeting.meetingDone = addMeeting.meetingDone - meeting;
}
 //created a function that will reset the values to 0
let meetingReset = function(addMeeting){
  addMeeting.meeting = 0;
  addMeeting.meetingDone = 0;
}
//gets the sum of the two values
let meetingSummary = function(addMeeting){
 let allMeeting = addMeeting.meeting + addMeeting.meetingDone;
 return ` As at today sir, ${new Date}, you have ${allMeeting} pending meetings`;

}
//calls back the functions above
addMeeting(mytodo, 7);
addMeetingDone(mytodo, 5);
// meetingSummary(mytodo);
console.log(meetingSummary(mytodo));

// PRINTS  As at today sir, Wed Feb 06 2019 16:41:17 GMT+0100 (WAT), you have 2 pending meetings