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

$('.saveBtn').on('click', function () {
    var parent = $(this).parent();

    localStorage.setItem(parent.attr('id'), parent.children().eq(1).val());
});


$('#10').children().eq(1).val(localStorage.getItem(10));
$('#11').children().eq(1).val(localStorage.getItem(11));
$('#12').children().eq(1).val(localStorage.getItem(12));
$('#13').children().eq(1).val(localStorage.getItem(13));
$('#14').children().eq(1).val(localStorage.getItem(14));
$('#15').children().eq(1).val(localStorage.getItem(15));
$('#16').children().eq(1).val(localStorage.getItem(16));
$('#17').children().eq(1).val(localStorage.getItem(17));