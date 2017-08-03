/**
 * Created by dllo on 17/8/3.
 */
$("#weixin").mouseover(function () {
    $("#QRcode_all").css("opacity", "1");
})
$("#weixin").mouseout(function () {
    $("#QRcode_all").css("opacity", "0");
})

$("#back_top_1").mouseover(function () {
    $("#back_top_2").css("backgroundColor", "#78bc85");
})
$("#back_top_1").mouseout(function () {
    $("#back_top_2").css("backgroundColor", "rgb(218,218,218)");
})


$("#back_top_1").click(function () {
    $("html,body").animate({scrollTop:0}, 200);
})




var initTop = 0;
$(window).scroll(function () {

    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 1500) {
        $("#back_top_1").css("opacity", "1");
    } else if (scrollTop < 1500) {
        $("#back_top_1").css("opacity", "0");
    }
    if(scrollTop >= 50) {
        $("#header-outer").css("top","-78px");
        if (scrollTop > initTop) {
            $("#header-outer").css("top","-78px");
        } else {
            $("#header-outer").css("top","0");
        }
        initTop = scrollTop;


    }else if(scrollTop < 50) {
        $("#header-outer").css("top","0");
    }


});