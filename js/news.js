$(function () {
    var ximgs = $(".left_huandeng");
    var xspans = $(".news_body .spans .span");
    if (ximgs.length > 0) {
        var xindex = 0;
    }
    xspans.mouseover(function () {
        var xindex = $(this).index();
        ximgs.hide();
        xspans.removeClass("on");
        ximgs.eq(xindex).show();
        xspans.eq(xindex).addClass("on");
    });
    var six = window.setInterval(function () {
        if (xindex + 1 < ximgs.length) {
            ximgs.eq(xindex).fadeOut(1000);
            xspans.removeClass("on");
            ximgs.eq(xindex + 1).fadeIn(1000);
            xspans.eq(xindex + 1).addClass("on");
            xindex = xindex + 1;
        } else {
            ximgs.eq(xindex).fadeOut(1000);
            xspans.removeClass("on");
            xindex = 0
            ximgs.eq(xindex).fadeIn(1000);
            xspans.eq(xindex).addClass("on");
        }
    }, 5000);
});