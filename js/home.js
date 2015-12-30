$(function () {
    var imgs = $(".huandeng .huandeng_task"); //获取全部图片
    var spans = $(".huandeng_spans .huandeng_spans_span");
    var ximgs = $(".home_info1_left1_huandeng");
    var xspans = $(".home_info1_left1 .spans .span");

    if (imgs.length > 0) {
        var index = 0;
    }
    if (ximgs.length > 0) {
        var xindex = 0;
    }
    spans.mouseover(function () {
        var index = $(this).index();
        imgs.hide();
        spans.removeClass("on");
        loadHuandengImg0(imgs.eq(index));
    });

    xspans.mouseover(function () {
        var xindex = $(this).index();
        ximgs.hide();
        xspans.removeClass("on");
        ximgs.eq(xindex).show();
        xspans.eq(xindex).addClass("on");
    });

    var loadHuandengImg = function (obj) {
        var dataImg = obj.attr("data-img");
        var dataLink = obj.attr("data-link");
        obj.css("background-image", "url(" + dataImg + ")");
        $("#huandeng_Link").attr("href", dataLink);
        spans.eq(obj.index()).addClass("on");
        obj.fadeIn(1000);
    };
    var loadHuandengImg0 = function (obj) {
        var dataImg = obj.attr("data-img");
        var dataLink = obj.attr("data-link");
        obj.css("background-image", "url(" + dataImg + ")");
        $("#huandeng_Link").attr("href", dataLink);
        spans.eq(obj.index()).addClass("on");
        obj.show();
    };


    var si = window.setInterval(function () {
        if (index + 1 < imgs.length) {
            imgs.eq(index).fadeOut(1000);
            spans.removeClass("on");
            loadHuandengImg(imgs.eq(index + 1));
            index = index + 1;
        } else {
            imgs.eq(index).fadeOut(1000);
            spans.removeClass("on");
            index = 0
            loadHuandengImg(imgs.eq(index));
        }

    }, 7000);
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