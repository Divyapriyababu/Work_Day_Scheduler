var today = moment();
$("#currentDay").text(today.format("dddd[,] MMMM Do"));

$('.time-block').each(function() {
    var hourBlock = parseInt($(this).attr('id'));
    var currentHour = today.hour();
    if (hourBlock < currentHour) {
        $(this).children().eq(1).addClass("past");
        $(this).children().eq(1).removeClass("future");
        $(this).children().eq(1).removeClass("present");
    } else if (hourBlock == currentHour) {
        $(this).children().eq(1).addClass("present");
        $(this).children().eq(1).removeClass("past");
        $(this).children().eq(1).removeClass("future");
    } else {
        $(this).children().eq(1).addClass("future");
        $(this).children().eq(1).removeClass("past");
        $(this).children().eq(1).removeClass("present");
    }
});