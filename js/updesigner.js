$(function () {
    $("#submit").click(function () {
        if ($(this).hasClass("b-color-shui")) return;
        if (!checkForm("DesignerRealName", "", false)) {
            Message("请填写真实姓名!", true);
            javascript: test_item(0);
            return;
        } else if ($("input[name='DesignerSex']:checked").length <= 0) {
            Message("请选择性别!", true);
            javascript: test_item(0);
            return;
        } else if (!checkForm("DesignerBirthdate", "", false)) {
            Message("请填写出生日期!", true);
            javascript: test_item(0);
            return;
        } else if ($("#DesignerResidenceProvince").val() == "0") {
            Message("请选择省份!", true);
            javascript: test_item(0);
            return;
        } else if ($("#DesignerResidenceCity").val() == "0") {
            Message("请选择市区!", true);
            javascript: test_item(0);
            return;
        } else if (!checkForm("DesignerAccount", "", false)) {
            Message("请填写户口!", true);
            javascript: test_item(0);
            return;
        } else if (!checkForm("DesignerIDCardNo", "", false)) {
            Message("请填写身份证号!", true);
            javascript: test_item(0);
            return;
        } else if ($("#DesignerEducation").val() == "0") {
            Message("请填写最高学历!", true);
            javascript: test_item(0);
            return;
        } else if ($("#DesignerEducation").val() != "0" && $("#DesignerEducation").val() != "高中及以下" && !checkForm("DesignerSchoolTag", "", false)) {
            Message("请填写毕业院校!", true);
            javascript: test_item(0);
            return;
        } else if (!checkForm("DesignerWorkExperience", "", false) || !checkForm("DesignerWorkExperience", /^[0-9]*$/)) {
            Message("请正确填写工作经验(年)!", true);
            javascript: test_item(0);
            return;
        } else if ($("#PostAppliedDesignerTitleID").val() == "0") {
            Message("请选择申请职位!", true);
            javascript: test_item(0);
            return;
        } else if (!checkForm("DesignerMail", /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
            Message("请填写正确的邮箱!", true);
            javascript: test_item(0);
            return;
        } else if ($("input[name='DesignFieldID']:checked").length <= 0) {
            Message("请勾选设计领域!", true);
            javascript: test_item(0);
            return;
        } else {
            var temp = true;
            $(".linebox").each(function (i, n) {
                var curr = $(n);
                if (curr.hasClass("jyjl")) { }
                else {
                    var DesignerSchool = curr.find("[name='DesignerSchool']");
                    var DesignerStartTime = curr.find("[name='DesignerStartTime']");
                    var DesignerEndTime = curr.find("[name='DesignerEndTime']");
                    var DesignerDiplomas = curr.find("[name='DesignerDiplomas']");
                    var DesignerMajor = curr.find("[name='DesignerMajor']");
                    if (!checkForm(DesignerSchool, "", false)) {
                        Message("请填写毕业院校!", true);
                        temp = false;
                        return false;
                    } else if (!checkForm(DesignerStartTime, "", false)) {
                        Message("请填写就读时间!", true);
                        temp = false;
                        return false;
                    } else if (!checkForm(DesignerEndTime, "", false)) {
                        Message("请填写就读时间!", true);
                        temp = false;
                        return false;
                    } else if (!checkForm(DesignerDiplomas, "", false)) {
                        Message("请填写学历!", true);
                        temp = false;
                        return;
                    } else if (!checkForm(DesignerMajor, "", false)) {
                        Message("请填写专业!", true);
                        temp = false;
                        return false;
                    }
                }
            });

            $(".linebox01").each(function (i, n) {
                var curr = $(n);
                if (curr.hasClass("jyjl")) { }
                else {
                    var DesignerCompany = curr.find("[name='DesignerCompany']");
                    var DesignerStartDate = curr.find("[name='DesignerStartDate']");
                    var DesignerEndDate = curr.find("[name='DesignerEndDate']");
                    var DesignerSection = curr.find("[name='DesignerSection']");
                    var DesignerPosition = curr.find("[name='DesignerPosition']");

                    if (!checkForm(DesignerCompany, "", false)) {
                        Message("请填写工作单位!", true);
                        temp = false;
                        return false;
                    } else if (!checkForm(DesignerStartDate, "", false)) {
                        Message("请填写工作时间!", true);
                        temp = false;
                        return false;
                    } else if (!checkForm(DesignerEndDate, "", false)) {
                        Message("请填写工作时间!", true);
                        temp = false;
                        return false;
                    } else if (!checkForm(DesignerSection, "", false)) {
                        Message("请填写所在部门!", true);
                        temp = false;
                        return;
                    } else if (!checkForm(DesignerPosition, "", false)) {
                        Message("请填写职位!", true);
                        temp = false;
                        return false;
                    }
                }
            });
            if (!temp) return;

            if (!checkForm("DesignerEnclosure", "", false)) {
                Message("请上传附件!", true);
                return;
            } else if (!checkForm("DesignerDes", "", false)) {
                Message("请填写自我评价!", true);
                return;
            } else {
                $(this).addClass("b-color-shui");
                var DesignFieldID = "";
                $("input[name='DesignFieldID']:checked").each(function (i, n) {
                    DesignFieldID += '{"DesignFieldID":"' + $(n).val() + '"},';
                });
                DesignFieldID = DesignFieldID.substring(0, DesignFieldID.length - 1);

                var DesignerWorkExperience = "";
                $(".linebox01").each(function (i, n) {
                    var curr = $(n);
                    if (curr.hasClass("jyjl")) { }
                    else {
                        DesignerWorkExperience += "{";
                        var DesignerCompany = curr.find("[name='DesignerCompany']");
                        var DesignerStartDate = curr.find("[name='DesignerStartDate']");
                        var DesignerEndDate = curr.find("[name='DesignerEndDate']");
                        var DesignerSection = curr.find("[name='DesignerSection']");
                        var DesignerPosition = curr.find("[name='DesignerPosition']");
                        var DesignerWorkDes = curr.find("[name='DesignerWorkDes']");
                        DesignerWorkExperience += '"DesignerCompany":"' + DesignerCompany.val() + '",';
                        DesignerWorkExperience += '"DesignerStartDate":"' + DesignerStartDate.val() + '",';
                        DesignerWorkExperience += '"DesignerEndDate":"' + DesignerEndDate.val() + '",';
                        DesignerWorkExperience += '"DesignerSection":"' + DesignerSection.val() + '",';
                        DesignerWorkExperience += '"DesignerPosition":"' + DesignerPosition.val() + '",';
                        DesignerWorkExperience += '"DesignerWorkDes":"' + DesignerWorkDes.val() + '"';
                        DesignerWorkExperience += "},";
                    }
                });


                DesignerWorkExperience = DesignerWorkExperience.substring(0, DesignerWorkExperience.length - 1);


                var DesignerEducationExperience = "";
                $(".linebox").each(function (i, n) {
                    var curr = $(n);
                    if (curr.hasClass("jyjl")) { }
                    else {
                        var DesignerSchool = curr.find("[name='DesignerSchool']");
                        var DesignerStartTime = curr.find("[name='DesignerStartTime']");
                        var DesignerEndTime = curr.find("[name='DesignerEndTime']");
                        var DesignerDiplomas = curr.find("[name='DesignerDiplomas']");
                        var DesignerMajor = curr.find("[name='DesignerMajor']");
                        DesignerEducationExperience += "{";
                        DesignerEducationExperience += '"DesignerSchool":"' + DesignerSchool.val() + '",';
                        DesignerEducationExperience += '"DesignerStartTime":"' + DesignerStartTime.val() + '",';
                        DesignerEducationExperience += '"DesignerEndTime":"' + DesignerEndTime.val() + '",';
                        DesignerEducationExperience += '"DesignerDiplomas":"' + DesignerDiplomas.val() + '",';
                        DesignerEducationExperience += '"DesignerMajor":"' + DesignerMajor.val() + '",';
                        DesignerEducationExperience += "},";
                    }
                });
                DesignerEducationExperience = DesignerEducationExperience.substring(0, DesignerEducationExperience.length - 1);

                var jsons =
                      '{"DesignerRealName":"' + $("#DesignerRealName").val()
                    + '","DesignerSex":"' + $("input[name='DesignerSex']:checked").val()
                    + '","DesignerBirthdate":"' + $("#DesignerBirthdate").val()
                    + '","DesignerResidenceProvince":"' + $("#DesignerResidenceProvince option:selected").val() + "-" + $("#DesignerResidenceProvince option:selected").text()
                    + '","DesignerResidenceCity":"' + $("#DesignerResidenceCity option:selected").val() + "-" + $("#DesignerResidenceCity option:selected").text()
                    + '","DesignerAccount":"' + $("#DesignerAccount").val()
                    + '","DesignerIDCardNo":"' + $("#DesignerIDCardNo").val()
                    + '","DesignerSchoolTag":"' + $("#DesignerSchoolTag").val()
                    + '","DesignerEducation":"' + $("#DesignerEducation").val()
                    + '","PostAppliedDesignerTitleID":"' + $("#PostAppliedDesignerTitleID").val()
                    + '","DesignerCurrentEmployer":"' + $("#DesignerCurrentEmployer").val()
                    + '","DesignerCurrentPosition":"' + $("#DesignerCurrentPosition").val()
                    + '","DesignerAcceptableScope":"' + $("#DesignerAcceptableScope").val()
                    + '","DesignerWorkExperienceYear":"' + $("#DesignerWorkExperience").val()
                    + '","DesignerServiceCharacteristics":"' + $("#DesignerServiceCharacteristics").val()
                    + '","DesignerFestnetznummer":"' + $("#DesignerFestnetznummer").val()
                    + '","DesignerQQ":"' + $("#DesignerQQ").val()
                    + '","DesignerWeChat":"' + $("#DesignerWeChat").val()
                    + '","DesignerMail":"' + $("#DesignerMail").val()
                    + '","DesignerMobile":"' + $("#DesignerMobile").val()
                    + '","DesignerEnclosure":"' + $("#DesignerEnclosure").val()
                    + '","DesignerDes":"' + $("#DesignerDes").val()
                    + '","UserImageSrc":"' + $("#UserImageSrc").val()
                    + '","DesignFieldID":[' + DesignFieldID + ']'
                    + ',"DesignerEducationExperience":[' + DesignerEducationExperience + ']'
                    + ',"DesignerWorkExperience":[' + DesignerWorkExperience + ']}';


                AjaxService.ServiceParas = {
                    Jsons: jsons
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        $(this).removeClass("b-color-shui");
                        Message("升级设计师成功,请等待审核!", true, function () { window.location.href = "/personal/general/info.aspx"; }, function () { window.location.href = "/personal/general/info.aspx"; }, 60000);
                    } else {
                        $(this).removeClass("b-color-shui");
                        Message(e.Message, true);
                    }
                });
            }
        }
    });



    $("#uploadify").uploadify({
        width: 112,
        height: 30,
        uploader: "/js/uploadify/uploadify.swf",
        script: "/ajax/uploadimg.ashx",
        auto: true,
        multi: true,
        simUploadLimit: 1,
        sizeLimit: 102400000,
        cancelImg: "/images/cancelfile.png",
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


    $("#DesignerEnclosureuploadify").uploadify({
        width: 125,
        height: 34,
        uploader: "/js/uploadify/uploadify.swf",
        script: "/ajax/uploadrar.ashx",
        auto: true,
        multi: true,
        simUploadLimit: 1,
        sizeLimit: 104857600,
        cancelImg: "/images/cancelfile.png",
        buttonImg: "/images/upimg.png",
        onComplete: function (event, queueId, fileObj, response, data) {
            addFile(response);
        }
    });
    function addFile(response) {
        if (response == "-1") {
            Message("格式错误!", true);
        }
        else if (response == "-2") {
            Message("文件大小超过了限制，最大上传文件为100M!", true);
        }
        else {
            $("#DesignerEnclosureFileImg").show();
            $("#DesignerEnclosureFile").html(response.substring(response.lastIndexOf('/') + 1));
            $("#DesignerEnclosure").val(response);
        }
    }
    $("#DesignerEducation").change(function () {
        var selValue = $(this).val();
        if (selValue != "0" && selValue != "高中及以下")
            $("#DesignerSchoolTagDiv").show();
        else
            $("#DesignerSchoolTagDiv").hide();
    });

});

function test_item(n) {
    var menu = document.getElementById("N_tab");
    var menuli = menu.getElementsByTagName("li");
    for (var i = 0; i < menuli.length; i++) {
        menuli[i].className = "";
        document.getElementById("I_tab" + i).className = "no";
        document.getElementById("I_tab" + n).className = "content";
    }
    menuli[n].className = "yes";
}