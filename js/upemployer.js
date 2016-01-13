


$(function () {
    $("#submit").click(function () {
        if ($(this).hasClass("b-color-shui")) return;
        if (!checkForm("EmployerRealName", "", false)) {
            Message("请填写真实姓名!", true);
            return;
        } else if (!checkForm("EmployerMailbox", /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
            Message("请填写正确的邮箱!", true);
            return;
        } else if ($("#EmployerResidenceProvince").val() == "0") {
            Message("请选择省份!", true);
            javascript: test_item(0);
            return;
        } else if ($("#EmployerResidenceCity").val() == "0") {
            Message("请选择市区!", true);
            javascript: test_item(0);
            return;
        } else if (!checkForm("EmployeRremarks", "", false)) {
            Message("请输入备注描述,如个人简介或接单要求等等!", true);
            return;
        } else {
            $(this).addClass("b-color-shui");
            AjaxService.ServiceParas = {
                EmployerRealName: $("#EmployerRealName").val(),
                EmployerMailbox: $("#EmployerMailbox").val(),
                EmployerQQ: $("#EmployerQQ").val(),
                EmployerWechat: $("#EmployerWechat").val(),
                UserImageSrc: $("#UserImageSrc").val(),
                EmployerResidenceProvince: $("#EmployerResidenceProvince option:selected").val() + "-" + $("#EmployerResidenceProvince option:selected").text(),
                EmployerResidenceCity: $("#EmployerResidenceCity option:selected").val() + "-" + $("#EmployerResidenceCity option:selected").text(),
                EmployeRremarks: $("#EmployeRremarks").val()
            };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    Message("升级雇主成功,请等待审核!", true, function () { window.location.href = "/personal/general/info.aspx"; }, function () { window.location.href = "/personal/general/info.aspx"; }, 60000);
                } else {
                    Message(e.Message, true);
                }
            });
        }
    });

    $("#uploadify").uploadify({
        width: 112,
        height: 30,
        uploader: "/js/uploadify/uploadify.swf",
        script: "/ajax/uploadimg.ashx",
        cancelImg: "/images/cancelfile.png",
        auto: true,
        multi: true,
        simUploadLimit: 1,
        sizeLimit: 102400000,
        buttonImg: "/images/NiceNewsImage/upimg.png",
        onComplete: function (event, queueId, fileObj, response, data) {
            addImg(response);
        }
    });

    function addImg(response) {
        if (response == "-1") {
            Message("格式错误", true);
        }
        else if (response == "-2") {
            Message("文件大小超过了限制，最大上传文件为2M!", true);
        }
        else {
            $("#FirstImg").attr("src", response);
            $("#UserImageSrc").val(response);
        }
    }
});
