$(document).ready();{

    const card_wrap = $(".services").find('p');
    const card1 = $(".card1").find("p");
    const card2 = $(".card2").find("p");
    const card3 = $(".card3").find("p");
    const card4 = $(".card4").find("p");
    const card5 = $(".card5").find("p");
    const card6 = $(".card6").find("p");




    card_wrap.hide();

    $(".card1").click(
        function () {
            if (card1.is(":visible")) {
                card1.hide();
            } else {
                card1.show();
            }
        }

    )


    $(".card2").click(
        function () {
            if (card2.is(":visible")) {
                card2.hide();
            } else {
                card2.show();
            }
        }
    )



    $(".card3").click(
        function () {
            if (card3.is(":visible")) {
                card3.hide();
            } else {
                card3.show();
            }
        }

    )

    $(".card4").click(
        function () {
            if (card4.is(":visible")) {
                card4.hide();
            } else {
                card4.show();
            }
        }

    )

    $(".card5").click(
        function () {
            if (card5.is(":visible")) {
                card5.hide();
            } else {
                card5.show();
            }
        }

    )

    $(".card6").click(
        function () {
            if (card6.is(":visible")) {
                card6.hide();
            } else {
                card6.show();
            }
        }

    )


};