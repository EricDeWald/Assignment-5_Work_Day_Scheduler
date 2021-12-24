var jumbo_time = moment().format('MMMM Do YYYY, h:mm a');
document.getElementById("currentDay").innerHTML = jumbo_time;

var current_hour = parseInt(moment().hours());

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

var local_stored_plans_keys = Object.keys(localStorage);
var save_buttons = $('button') 

save_buttons.on('click', function() {
    var plan_text_input = $(this).parent().siblings('.description').val();
    var time_slot =$(this).parent().parent().attr('id')
    localStorage.setItem(time_slot, plan_text_input);
});

for (let i = 0; i < local_stored_plans_keys.length; i++){
    var stored_plan_text = localStorage.getItem(local_stored_plans_keys[i]);
    var hour_key = $("#" + local_stored_plans_keys[i]).find("textarea")
    hour_key.val(stored_plan_text);
};
