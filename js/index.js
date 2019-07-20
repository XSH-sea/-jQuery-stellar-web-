$(function () {
    $(".bg").css("background-attachment", "fixed").attr("data-stellar-background-ratio", "0.3");

    $.stellar({
        horizontalScrolling: false,
        responsive: true
    })
});