//左侧导航JS 控制收起 展开
$(function () {
    $(".nav_a").click(function () {
        var curr = $(this);
        var cur_next_ul = curr.parent().find("ul");
        if (curr.hasClass("on")) {
            cur_next_ul.stop(false, true).slideUp(function () {
                cur_next_ul.hide(500);
            });
            curr.removeClass("on");
        } else {
            cur_next_ul.stop(false, true).slideDown(function () {
                cur_next_ul.show(500);
            });
            curr.addClass("on");
        }
    });

    $(".nav1_ul .nav2_ul li a").click(function () {
        $(".nav1_ul .nav2_ul li").removeClass("on");
        $(this).parent().addClass("on");
    });
});

//当前时间
$(function () {
    function show() {
        var mydate = new Date();
        var str = "" + mydate.getFullYear() + "年";
        str += (mydate.getMonth() + 1) + "月";
        str += mydate.getDate() + "日";
        str += " 周 " + mydate.getDay();
        return str;
    }
    $("#dqtime").html(show());
});
$(function () {
    $(".table01 tr:even").css("background-color", "#f9f9f9");
    $(".table01 tr:odd").css("background-color", "#fff");
    $(".table02 td:even").css({ "background-color": "#f9f9f9", "text-align": "right", "width": "15%" });
    $(".table02 td:odd").css({ "background-color": "#fff", "width": "35%" });

  
    $(".table03 tr:even").css("background-color", "#f9f9f9");
    $(".table03 tr:odd").css("background-color", "#fff");
});

function initValidation(validationObject) {
    jQuery('#form1').validate({
        errorPlacement: function (error, element) {
            element.parentsUntil("tr").last().append(error).find('label.info,label.valid').remove();
        },
        success: function (error) {
            error.empty().addClass("valid");
        },
        rules: validationObject
    });
}
$(function () {

    $(".htico").hover(function () {
        $(this).find('.del').toggle();
    });
    $(".htico .del").click(function () {
        $(this).parent('.htico').remove();
    });
    $(".zhankai").click(function () {
        $(".nrbox").css({"height":"auto","font-size":"100%"});
        $(".zhankai").hide();
        $(".shouqi").show();

    });
    $(".shouqi").click(function () {
        $(".nrbox").css({"height":"200px","font-size":"100%"});
        $(".shouqi").hide();
        $(".zhankai").show();

    });


});