$(document).ready(function () {
    $(document).ready(function(){
        $(".contenu").click(function(){
            var texte = $(this).children("p");
            $("p").slideUp(1000);
            if(texte.is(":hidden")){
                texte.slideDown(1000);
            }
        });
        $("button").click(function () {
            $("#popup").slideToggle(1000);
            var pop=$(this).parent("#popup")
            if (pop.is(":hidden")) {
                $("#conteneur").css("opacity", "1");
            }
        });
    });
});