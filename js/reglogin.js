
$(function () {
    $("input:text,input:password,textarea").focus(function () {
        $(this).addClass("on");
    }).blur(function () {
        $(this).removeClass("on");
        check($(this));
    });
    $("#submit").click(function () {
        var uid = $("#uid");
        var pwd = $("#pwd");
        var pwds = $("#pwds");
        var checkCode = $("#check");
        if (check(uid) && check(pwd) && check(pwds) ) {
            AjaxService.ServiceParas = { uid: uid.val(), pwd: pwd.val(),  check: checkCode.val() };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    Message("注册成功! 点击确定进入个人中心!", false, function () {
                        window.location.href = "/personal/general/info.aspx";
                    }, "", 600000);
                } else {
                    Message(e.Message, true);
                }
            });
        } else {
            Message("请填写完整信息!", true);
        }
    });
});
var check = function (object) {
    var id = object.attr("id");
    var obj = $("#" + id).val();
    if (id == "uid") {
        var regEx = /^[A-Za-z0-9]{6,15}$/;
        if (regEx.test(obj)) {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").hide();
            objs.find(".ok").show();
            return true;
        } else {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").show();
            objs.find(".ok").hide();
            return false;
        }
    } else if (id == "pwd") {
        var regEx = /^[A-Za-z0-9]{6,15}$/;
        if (regEx.test(obj)) {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").hide();
            objs.find(".ok").show();
            return true;
        } else {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").show();
            objs.find(".ok").hide();
            return false;
        }
    } else if (id == "pwds") {
        if (obj == $("#pwd").val()) {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").hide();
            objs.find(".ok").show();
            return true;
        } else {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").show();
            objs.find(".ok").hide();
            return false;
        }
    } else if (id == "phone") {
        var regEx = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
        if (regEx.test(obj)) {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").hide();
            objs.find(".ok").show();
            return true;
        } else {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").show();
            objs.find(".ok").hide();
            return false;
        }
    }
}


function changeImg() {
    $("#checkimg").attr("src", "checkimg.ashx?" + Math.random());
}