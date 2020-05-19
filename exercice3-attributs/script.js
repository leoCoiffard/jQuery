$(document).ready(function () {
   $("ul li a").click(function () {
       $("ul li a").removeClass("orange");
       $("ul li").removeClass("active");
       $(this).addClass("orange");
       $(this).parent().addClass("active");
    });
});