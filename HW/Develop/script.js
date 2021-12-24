var jumbo_time = moment().format('MMMM Do YYYY, h:mm a');
document.getElementById("currentDay").innerHTML = jumbo_time;

var current_hour = parseInt(moment().hours());
console.log(current_hour)
$('.description').each(function(){
    var hour_id = $(this).attr('id')
    if (parseInt(hour_id) < current_hour){
        $(this).addClass('past')
    }
    if (parseInt(hour_id) == current_hour){
        $(this).addClass('present')
    }
    if (parseInt(hour_id) > current_hour){
        $(this).addClass('future')
    }
});
// click into a timeblock I can enter an event
//--- creat a target on click event listener to the time blocks to have a text field
// end of for loop
// click the save button for that timeblock the text for that event is saved in local storage
/////--- create a target on click event for the save button
var save_buttons = $('button') // array of button elements
save_buttons.on('click', function() {click_save_button();console.log("clicked");});
//saved to local sorage then repopulate on refresh using $(document).ready(function () {}
function click_save_button (){for (let i = 0; i < save_buttons.length; i++){};};
// refresh the page the saved events persist
// saveBtn.on("click", function() {
//     // console.log(this);
//     var taskInput = $(this).siblings(".description").val();
//     var timeSlot = $(this).parent().attr("id");
//     localStorage.setItem(timeSlot, taskInput);
// }); // end of saveBtn click event
// for (i = 0; i < savedPlans.length; i++) {
//     var taskInput = localStorage.getItem(savedPlans[i]);
//     var savedText = $("#" + savedPlans[i]).find("textarea")
//     savedText.val(taskInput);
// }
// end of for loop
// past_color()
// function color_time_block(){
//     if (current_time > paresInt(document.getElementById(9))){
//         //add class .past
//     }
//     else if (current_time == paresInt(document.getElementById(9))){
//         //add class .present
//     }
//     else (current_time > paresInt(document.getElementById(9))){
//         //add class .future
//     }
// }
// function future_color(){
//     if
