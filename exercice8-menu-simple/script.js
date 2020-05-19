$(document).ready(function () {
    $("#menu1").click(function () {
        $("#sous-menu1").slideToggle(1000);
        $("#sous-menu2").slideUp(1000);
        $("#sous-menu3").slideUp(1000);
        $("#sous-menu4").slideUp(1000);
    });
    $("#menu2").click(function () {
        $("#sous-menu2").slideToggle(1000);
        $("#sous-menu1").slideUp(1000);
        $("#sous-menu3").slideUp(1000);
        $("#sous-menu4").slideUp(1000);
    });
    $("#menu3").click(function () {
        $("#sous-menu3").slideToggle(1000);
        $("#sous-menu2").slideUp(1000);
        $("#sous-menu1").slideUp(1000);
        $("#sous-menu4").slideUp(1000);
    });
    $("#menu4").click(function () {
        $("#sous-menu4").slideToggle(1000);
        $("#sous-menu2").slideUp(1000);
        $("#sous-menu3").slideUp(1000);
        $("#sous-menu1").slideUp(1000);
    })
});