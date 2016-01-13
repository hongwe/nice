
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
        var smsCheckCode = $("#smsCheckCode");
        if (!$("#read").prop("checked") ) {
            Message("请阅读用户协议,并勾选同意!", true);
            return;
        }
        if (check(uid) && check(smsCheckCode) && check(pwd) && check(pwds)) {
            AjaxService.ServiceParas = { uid: uid.val(),smsCheckCode:smsCheckCode.val(), pwd: pwd.val(), type:"reg" };
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
    $("#yhxy").click(function () {
        $.dialog({
            lock: true,
            title: "用户协议",
            content: "<div style=\"width:500px; height:300px;\">大家好,我是用户协议</div>"
        });
    });
});
var check = function (object) {
    var id = object.attr("id");
    var obj = $("#" + id).val();
    if (id == "pwd") {
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
    } else if (id == "uid") {
        var regEx = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i;
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
    } else if (id == "smsCheckCode") {
        if (obj != "" && obj.length == 6) {
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
var countdown = 60;
var isSms = true;
function settime(val) {
 
    var regEx = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i;
    if (regEx.test($("#uid").val())) {
        if (!isSms) { return false; }
        isSms = false;
        if (countdown == 60) {
            AjaxService.ServiceParas = { type: "send", uid: $("#uid").val() };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    isSms = true;
                    Message("发送成功,请您稍等几秒,短信马上发送到您的手机!", false, function () {
                    }, "", 600000);
                } else {
                    Message(e.Message, true);
                }
            });
            settimeTask(val);
        }
    } else {
        Message("请输入正确的手机号!", true);
        var objs = $("#uid").parent(".info2").siblings(".info3");
        objs.find(".cuowu").show();
        objs.find(".ok").hide();
    }
}
function settimeTask(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value = "获取验证码";
        countdown = 60;
        isSms = true;
        return;
    } else {
        val.setAttribute("disabled", true);
        val.value = "重新发送(" + countdown + ")";
        countdown--;
        isSms = false;
    }
    setTimeout(function () {
        settimeTask(val)
    }, 1000)
}
