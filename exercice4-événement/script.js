$(document).ready(function () {
    $("#noir").click(function () {
        $("body").css({
            "background" : "url(bois-noir.png)",
         });
    });
    $("#clair").click(function () { 
        $("body").css({
            "background" : "url(bois-clair.png)"
         });
    });
    $("img").hover(function () {
        $("img").attr("src","ny.jpg");
            
        }, function () {
            $("img").attr("src","sydney.jpg");
        }
    );
});