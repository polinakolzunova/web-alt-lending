$(() => {

    $("#menuToggle").click(function () {
        $(this).toggleClass("active");
        $(".page-header__nav").toggleClass("active");
    });

    $(".how-work__item-text .icon-cross").click(function () {
        let forchbx = $(this).attr("data-for");
        console.log(1,forchbx);
        $(`#${forchbx}`).prop("checked", false);
    });

    $("#clientLeft").click(() => slider("l"));

    $("#clientRight").click(() => slider("r"));

    function slider(dir = "r") {
        let left = Math.abs($(".clients__list").position().left);
        let widthel = $(".clients__item").width();
        let widthlist = $(".clients__list").width();

        if (left + widthel < widthlist && dir == 'r')
            $(".clients__list").css({left: "-" + (left + widthel) + "px"});
        else if (left >= widthel && dir == 'l')
            $(".clients__list").css({left: "-" + (left - widthel) + "px"});
    }

});