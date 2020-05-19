$(document).ready(function () {
    $("body").css({
        "background": "url(bg.png)",
    });

    $("#conteneur").css({
        "max-width": "1080px",
        "margin": "0 auto",
        "display": "flex",
        "flex-wrap": "wrap",
    });

    $("h1").css({
        "text-align": "center",
        "font-size": "3em",
        "width": "100%"
    });
    $("h2").css({
        "text-align": "center",
        "font-size": "1.2em",
        "width" : "100%",
    });

    $("#bandeau").css({
        "background": "url(montagne.jpg)",
        "background-repeat": "no-repeat",
        "width": "100%",
        "height": "300px",
    });

    $("#gauche").css({
        "width": "50%",
    });

    $("#gauche p:first").css({
        "font-weight": "bold"
    });

    $("#gauche p:eq(2)").css({
        "font-style": "italic"
    });

    $("#droite").css({
        "width": "50%",
        "display" : "flex",
        "flex-wrap" : "wrap",
    });

    $("#droite ul").css({
        "width": "20%",
        "margin" : "0 auto"
    });

    $("#droite ul:first li:last").css({
        "color": "green",
        "border": "1px solid green"
    });
    $("#droite ul:last a:even").css({
        "color": "blue",
        "text-decoration": "none",
        "list-style-type": "none"
    });

    $("#droite ul:last li").css({
        "list-style-type": "none"
    });

    $("#droite ul:last a:odd").css({
        "color": "red",
        "text-decoration": "none",
        "list-style-type": "none"
    });
    $("#bandeau").hover(function () {
            $("#bandeau").css({
               "background" : "url(cocotier.jpg)",
               "background-repeat" : "no-repeat"
            });
            $( "h1" ).text( "Les îles" );
        }, function () {
            $("#bandeau").css({
                "background" : "url(montagne.jpg)",
                "background-repeat" : "no-repeat"
             });
             $( "h1" ).text( "La montagne" );
        }
    );
});