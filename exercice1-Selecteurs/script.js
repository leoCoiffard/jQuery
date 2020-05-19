$(document).ready(function () {
    $("#liens a").css("display", "block");
    $("p:not(p:eq(1))").css("border-bottom", "3px solid orange");
    $("p:first").css("border-bottom", "3px solid black");
    $("p:last").css("font-weight", "bold");
    $("p:eq(3)").css("font-weight", "bold");
    $( "#conteneur *").css("color", "#333");
    $("#liens a").css("margin-left", "40px");
    $("table").css("margin-top", "50px");
    $("table td:even").css("background-color", "#D3D3D3	");
    $("table td:odd").css("background-color", "#A9A9A9");
    $(".test").css("color", "red");
    $("p:contains('Yes')").css("color", " #663399");
    $("p:not(p:first,p:last)").css("font-size", "0.80em");
    $("#liens a:first").css("background-color", "#ccc");
    $("#liens a:nth-child(3)").css("background-color", "#ccc");
    $("p a:only-child").css("background-color", "#c60");
    $("table td:empty").css("background-color", "#c60");
});