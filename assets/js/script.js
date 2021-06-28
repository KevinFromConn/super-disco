var currentDate = moment().format("dddd, MMMM Do")
$("#currentDay").append("Today's Date Is: ", currentDate)

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var hoursMilitary = [9, 10, 11, 12, 13, 14, 15, 16, 17,];


$(".saveBtn").click(function() {
   var hourId = $(this).parent().siblings(".hour").text();
   var savedData = $(this).parent().siblings(".col-sm-10").children(".form-control").val();
   localStorage.setItem(hourId, savedData);
   console.log($(this));
});

for (var i = 9; i < 18; i++) {

    var currentTime = new Date().getHours();

    var hour = i;

    var timeOfDay = "am";
    if (i >= 12) {
        timeOfDay = "pm";
    };

    if (i > 12) {
     hour -= 12;
    };

    var targetId = hour + timeOfDay;
    var hourId = $(this).parent().siblings(".hour").text();
    var savedData = $(this).parent().siblings(".col-sm-10").children(".form-control").val();
    var storedData = localStorage.getItem(hourId, savedData);

    if (storedData) {
        $(targetId).val(storedData);
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