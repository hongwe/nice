$(function () {
    $(".select_nn input").click(function () {
        var ul = $(this).siblings("ul");
        if (ul.css("display") == "none") {
            ul.slideDown("fast");
        } else {
            ul.slideUp("fast");
        }
    });
    $(".select_nn ul li a").click(function () {
        var txt = $(this).text();
        var value = $(this).attr("rel");
        var ul = $(this).parents("ul");
        ul.siblings("input[type='text']").val(txt);
        ul.siblings("input[type='hidden']").val(value);
        ul.hide();
    });
    $("#login_click").click(function () {
        $("#login").show();
        $("#login-mask ").show();
        $("#login .login_pc").show();
        $("#login .login_wx").hide();

    });
    $(".pop_click").click(function () {
        $(".popbox").show();
        $("#pop-mask").show();


    });
    $(".pop_close").click(function () {
        $(".popbox").hide();
        $("#pop-mask ").hide();
    });

    $(".login_close").click(function () {
        $("#login").hide();
        $("#login-mask ").hide();
    });
    $("#login-wxclick").click(function () {
        $("#login .login_wx").show();
        $("#login .login_pc").hide();
    });
    $("#login-pcclick").click(function () {
        $("#login .login_pc").show();
        $("#login .login_wx").hide();
    });


    var strStop = "<div id=\"cbbfixed\" style=\"bottom: 10px;\"><a href=\"#\" class=\"cbbtn\" id=\"cweixin\"><span class=\"yy-icon yy-weixin\"></span><div></div></a><a href=\"javascript:scrollTo(0,0);\" class=\"cbbtn\" id=\"gotop\"><span class=\"yy-icon yy-gt\"></span></a></div>";
    $("body").append(strStop);

    $(window).scroll(function () {
        if ($(this).scrollTop() <= 100) {
            $("#cbbfixed").hide();
        } else {
            $("#cbbfixed").show();
        }
    });


    //$(".ddltx").hover(function () {
    //    $(".name").slideToggle("fast");
    //
    //});

});
$(function () {

    $(document).on('focus', 'input:text,input:password,textarea,select', function () {
        $(this).addClass("on");
    });
    $(document).on('blur', 'input:text,input:password,textarea,select', function () {
        $(this).removeClass("on");
    });
    $(document).on('mouseleave', '.projectlist li', function () {
        $(".projectlist li").removeClass("on");
    });
    $(document).on('mousemove', '.projectlist li', function () {
        $(this).addClass("on");
    });
    $(document).on('mouseleave', '#j-header-searchwrap', function () {
        $(this).find('.dropdown-menu').stop().slideUp('fast');
    });
    $(document).on('mousemove', '#j-header-searchwrap', function () {
        $(this).find('.dropdown-menu').stop().slideDown('fast');
    });

    $(".gg01").hover(function () {
        $(".ggtit01").stop().slideToggle('fast');
    });
    $(".gg02").hover(function () {
        $(".ggtit02").stop().slideToggle('fast');
    });

    //$(".prnav01 li").click(function () {
    //    $(".prnav01 li").removeClass('on')
    //    $(this).addClass('on');
    //});
    //$(".prnav02 li").click(function () {
    //    $(".prnav02 li").removeClass('on')
    //    $(this).addClass('on');
    //});
    //$(".prnav03 li").click(function () {
    //    $(".prnav03 li").removeClass('on')
    //    $(this).addClass('on');
    //});
    //$(".paixu div").click(function () {
    //    $(".paixu div").removeClass('on')
    //    $(this).addClass('on');
    //});

    $(".baominguesr li").click(function () {
        $(".baominguesr li").removeClass('selected');
        $(this).addClass('selected');
    });
    $(".hetongbox li").hover(function () {
        $(this).find(".zhezhao").css('display', "block");
    }, function () {
        $(this).find(".zhezhao").css('display', "none");
    });
    $(".dkinfo").click(function () {
        $(".dakuaninfobox").css('display', "block");

    });
    $(".dkguanbi").click(function () {
        $(".dakuaninfobox").css('display', "none");

    });$(".dktijiao").click(function () {
        $(".dakuaninfobox").css('display', "none");

    });

    $(document).on('mousemove', '.bar_yun', function () {

        $(".bar_yun").addClass('bar_yun02');
        $(".bar_list").show();

    });

    $(document).on('mouseleave', '.bar_yun02', function () {

        $(".bar_list").hide();
        $(".bar_yun").removeClass('bar_yun02');


    });

    $(document).on('mousemove', '.tip', function () {

        $(".tip").animate({
            padding:'20px',
                height:'80px',
            width:'150px'
        });



    });
    $(document).on('mouseleave', '.tip', function () {

        $(".tip").animate({

            height:'14px',
            width:'14px'
        });



    });
    //$(".unpaid").hover(function () {
    //    $(this).find(".gongn").css('display', "block");
    //}, function () {
    //    $(this).find(".gongn").css('display', "none");
    //});


});
