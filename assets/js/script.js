$(() => {

    $("#menuToggle").click(function () {
        $(this).toggleClass("active");
        $(".page-header__nav").toggleClass("active");
    });

    $(".how-work__item-text .icon-cross").click(function () {
        let forchbx = $(this).attr("data-for");
        console.log(1, forchbx);
        $(`#${forchbx}`).prop("checked", false);
    });

    $("#clientLeft").click(() => slider("l"));

    $("#clientRight").click(() => slider("r"));

    function slider(dir = "r") {
        let left = Math.abs($(".clients__list").position().left);
        let widthel = $(".clients__item").innerWidth();

        let kOnScreen = Math.ceil($(".clients__slider").width() / widthel);
        let kAll = $(".clients__list").width() / widthel;
        let kLeft = left / widthel;

        //console.log(kAll, kLeft, kOnScreen);

        if (kAll - kLeft > kOnScreen && dir == 'r')
            $(".clients__list").css({left: "-" + (left + widthel) + "px"});

        else if (left >= widthel && dir == 'l')
            $(".clients__list").css({left: "-" + (left - widthel) + "px"});
    }

    $("#featuresPayment").click(function () {
        $(".features__buttons button").removeClass("active");
        $(this).addClass("active");

        $(".features-images__item").fadeOut();
        $(".features-images__item_payment").fadeIn();

        $(".features-content__item").css("display", "none");
        $(".features-content__item_payment").fadeIn();
    });

    $("#features1C").click(function () {
        $(".features__buttons button").removeClass("active");
        $(this).addClass("active");

        $(".features-images__item").fadeOut();
        $(".features-images__item_1c").fadeIn();

        $(".features-content__item").css("display", "none");
        $(".features-content__item_1c").fadeIn();
    });

    $("#featuresSecurity").click(function () {
        $(".features__buttons button").removeClass("active");
        $(this).addClass("active");

        $(".features-images__item").fadeOut();
        $(".features-images__item_security").fadeIn();

        $(".features-content__item").css("display", "none");
        $(".features-content__item_security").fadeIn();
    });

});