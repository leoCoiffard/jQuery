$(document).ready(function () {
    $("p").fadeIn(800);
    $("#rose").hide(setTimeout(function () {
        $("#rose").show();
        $("#rose").animate({
            "left": "550px",
            "top": "15px"
        }, 1500, "linear", setTimeout(function () {
            $("#bleu").show();
            $("#bleu").animate({
                "left": "720px",
                "top": "15px"
            }, 800, "linear", setTimeout(function () {
                $("#gris").show();
                $("#gris").animate({
                    "left": "800px",
                    "top": "15px"
                }, 400, "linear", setTimeout(function () {
                    $("#vert").show();
                    $("#vert").animate({
                        "left": "635px",
                        "top": "15px"
                    }, 300, "linear");
                }, 1000));
            }, 1200));
        }, 1500));    
    },1000));
});