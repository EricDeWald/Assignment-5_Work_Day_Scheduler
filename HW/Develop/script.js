//// a daily planner to create a schedule
//open the planner the current day is displayed at the top of the calendar I scroll down
////--- use moment.js to get time and date 
// var dateTime = null,
//     todayDate = null;
//     var keepTime = function () {
//         todayDate = moment(new Date())
//         dateTime.html(todayDate.format('dddd, MMMM Do YYYY, h:mm:ss a'));
//     };
//     $(document).ready(function () {
//         dateTime = $('#currentDay')
//         keepTime();
//         setInterval(keepTime, 1000);
//     });
// //end of time/keepTime functions 
    

var jumbo_time = moment().format('MMMM Do YYYY, h:mm a');
document.getElementById("currentDay").innerHTML = jumbo_time;

//// presented with timeblocks for standard business hours
// used bootstrap columns 

////---create 9am to 5pm blocks of time 
// view the timeblocks for that day each timeblock is color coded to indicate whether it is in the past, present, or future 
/// use a object with id's and time for time blocks and numbers then look up the time during the comparison

var time_blocks = {"time_block_9":9,"time_block_10":10,"time_block_11":11,"time_block_12":12,"time_block_1":13,"time_block_2":14,"time_block_3":15,"time_block_4":16,"time_block_5":17}

var current_time = parseInt(moment().format('h'))

function 

//--- color code using a comparison of the time in block with current time
// click into a timeblock I can enter an event
//--- creat on click event listener to the time blocks to have a text field
// click the save button for that timeblock the text for that event is saved in local storage
//--- create on click event for the save button
// refresh the page the saved events persist
//--- saved to local sorage then repopulate on refresh


