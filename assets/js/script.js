var currentDate = moment().format("dddd, MMMM Do")
$("#currentDay").append("Today's Date Is: ", currentDate)

$("button").on("click", function() {
    var timeId = $(this).attr("time");
    var taskEl = $(this).prev().val();

    localStorage.setItem(timeId, taskEl);
});

for (var i = 9; i < 18; i++) {

    var currentTime = new Date().getHours(); 
    console.log(currentTime);

    var hour = i;

    var timeOfDay = "am";
    if (i >= 12) {
        timeOfDay = "pm";
    };

    if (i > 12) {
     hour -= 12;
    };

    var targetId = "#" + hour + timeOfDay;
    var timeInput = localStorage.getItem(hour + timeOfDay);

    if (timeInput) {
        $(targetId).val(timeInput);
    }

    if (i < currentTime) {
        $(targetId).addClass("past")
    }
    else if (i > currentTime) {
        $(targetId).addClass("future")
    }
    else {
        $(targetId).addClass("present")
    }
};

var container = $(".container")
      
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var hoursMilitary = [9, 10, 11, 12, 13, 14, 15, 16, 17,];

    for (let index = 0; index < hours.length; index++) {
    // compare moment.hour() with hoursMilitary while using if/else and else/if statements
        container.append(`<div class="row">
      <div class="col-sm-1 hour">${hours[index]}</div>
      <div class="col-sm-10"><textarea class="form-control h-100 w-100"></textarea></div>
      <div class="col-sm-1"><button class="saveBtn h-100 w-100"><i class="far fa-save"></i></button></div>
    </div>`);       
};

