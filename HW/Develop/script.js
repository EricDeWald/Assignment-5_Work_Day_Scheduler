//// a daily planner to create a schedule
//open the planner the current day is displayed at the top of the calendar I scroll down
////--- use moment.js to get time and date

var jumbo_time = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = jumbo_time;

// presented with timeblocks for standard business hours

//---create 9am to 5pm blocks of time 
// view the timeblocks for that day each timeblock is color coded to indicate whether it is in the past, present, or future 
//--- color code using a comparison of the time in block with current time
// click into a timeblock I can enter an event
//--- creat on click event listener to the time blocks to have a text field
// click the save button for that timeblock the text for that event is saved in local storage
//--- create on click event for the save button
// refresh the page the saved events persist
//--- saved to local sorage then repopulate on refresh


