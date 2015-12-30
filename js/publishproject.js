var editor;
KindEditor.ready(function (K) {
    editor = K.create("#ProjectContent", {
        resizeType: 0,
        allowFileManager: true,
        urlType: "absolute",
        uploadJson: "/ajax/kindeditopruploadimage.ashx?path=/uploadImage",
        height: "300px", //编辑框高度
        width: "710px", //编辑框宽度
        cssPath: ['/css/kindeditor/project.css'],
        items: ['undo', 'redo', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', '|', 'insertorderedlist', 'insertunorderedlist', 'multiimage', 'selectall', '|', 'fontname', 'fontsize', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', '|', 'emoticons', 'fullscreen'], //工具栏操作按钮
        afterBlur: function () { this.sync(); }, //失去焦点时
        afterChange: function () {
            $('#kestrlength').html(15000 - this.count('text')); //字数统计包含纯文本、IMG、EMBED，不包含换行符，IMG和EMBED算一个文字
            if (this.count('text') > 15000) {
                var txt = editor.html();
                editor.html(txt.substring(0, 15000));
            }
        }
    });
});
$(function () {
    var designFieldJson = eval(designField);
    $("#DesignFieldOne").change(function () {
        var curr = $(this).val();
        $("#DesignFieldTwo").html("<option value='0'>选择二级分类</option>");
        var html = '<option value="0">选择二级分类</option>';
        if (curr != "0") {
            $(designFieldJson).each(function (i, n) {
                if (curr == n.pid) {
                    html += '<option value="' + n.id + '">' + n.name + '</option>';
                }
            });
            $("#DesignFieldTwo").html(html);
        }
    });
    $.each(province, function (k, p) {
        var option = "<option value='" + p.ProID + "'>" + p.ProName + "</option>";
        $("#ProjectProvince").append(option);
    });
    $("#ProjectProvince").change(function () {
        var selValue = $(this).val();
        $("#ProjectCity option:gt(0)").remove();

        $.each(city, function (k, p) {
            if (p.ProID == selValue) {
                var option = "<option value='" + p.CityID + "'>" + p.CityName + "</option>";
                $("#ProjectCity").append(option);
            }
        });
    });
    $("#ProjectEnclosureuploadify").uploadify({
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
            $("#ProjectEnclosureFileImg").show();
            $("#ProjectEnclosureFile").html(response.substring(response.lastIndexOf('/') + 1));
            $("#ProjectEnclosure").val(response);
        }
    }
    $("#submit").click(function () {
        if ($(this).hasClass("b-color-shui")) return;
        if (!checkForm("ProjectTitle", "", false)) {
            Message("请输入任务标题!", true);
            return; 
        } else if ($("#DesignFieldTwo").val() == "0") {
            Message("请选择任务类型!", true);
            return;
        } else if ($("#ProjectProvince").val() == "0") {
            Message("请选择省份!", true);
            return;
        } else if ($("#ProjectCity").val() == "0") {
            Message("请选择市区!", true);
            return;
        } else if (!checkForm("ProjectAddress", "", false)) {
            Message("请输入详细地址!", true);
            return;
        } else if (!checkForm("ProjectDesignPhase", "", false)) {
            Message("请输入项目设计规模!", true);
            return;
        } else if (!checkForm("ProjectGeneralization", "", false)) {
            Message("请输入项目概括!", true);
            return;
        } else if (!checkForm("ProjectContent", "", false)) {
            Message("请输入项目内容!", true);
            return;
        } else if (!checkForm("ProjectInvestmentScale", "", false)) {
            Message("请输入项目投资规模!", true);
            return;
        } else if (!checkForm("ProjectServiceRequest", "", false)) {
            Message("请输入项目服务要求!", true);
            return;
        } else if (!checkForm("ProjectAmount", /^\d+(\.\d+)?$/)) {
            Message("请输入正确的项目金额!", true);
            return;
        } else if (!checkForm("ProjectEndTime", "", false)) {
            Message("请输入项目完成时间!", true);
            return;
        } else {
            $(this).addClass("b-color-shui");
            AjaxService.ServiceParas = {
                ProjectTitle: $("#ProjectTitle").val(),
                ProjectType: $("#DesignFieldTwo").val(),
                ProjectProvince: $("#ProjectProvince option:selected").val() + "-" + $("#ProjectProvince option:selected").text(),
                ProjectCity: $("#ProjectCity option:selected").val() + "-" + $("#ProjectCity option:selected").text(),
                ProjectAddress: $("#ProjectAddress").val(),
                ProjectDesignPhase: $("#ProjectDesignPhase").val(),
                ProjectGeneralization: $("#ProjectGeneralization").val(),
                ProjectContent: $("#ProjectContent").val(),
                ProjectInvestmentScale: $("#ProjectInvestmentScale").val(),
                ProjectServiceRequest: $("#ProjectServiceRequest").val(),
                ProjectAmount: $("#ProjectAmount").val(),
                ProjectEndTime: $("#ProjectEndTime").val(),
                ProjectEnclosure: $("#ProjectEnclosure").val()
            };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    if (e.Message.indexOf("错误") >= 0) {
                        Message(e.Message, true);
                    } else {
                        window.location.href = "/personal/employer/project/alipay.aspx?id=" + e.Message;
                    }
                    $(this).removeClass("b-color-shui");

                } else {
                    Message(e.Message, true);
                    $(this).removeClass("b-color-shui");
                }
            });
        }

    });





    $("#submitEdit").click(function () {
        if ($(this).hasClass("b-color-shui")) return;
        if (!checkForm("ProjectTitle", "", false)) {
            Message("请输入任务标题!", true);
            return;
        } else if ($("#DesignFieldTwo").val() == "0") {
            Message("请输入任务类型!", true);
            return;
        } else if ($("#ProjectProvince").val() == "0") {
            Message("请选择省份!", true);
            return;
        } else if ($("#ProjectCity").val() == "0") {
            Message("请选择市区!", true);
            return;
        } else if (!checkForm("ProjectAddress", "", false)) {
            Message("请输入详细地址!", true);
            return;
        } else if (!checkForm("ProjectDesignPhase", "", false)) {
            Message("请输入项目设计规模!", true);
            return;
        } else if (!checkForm("ProjectGeneralization", "", false)) {
            Message("请输入项目概括!", true);
            return;
        } else if (!checkForm("ProjectContent", "", false)) {
            Message("请输入项目内容!", true);
            return;
        } else if (!checkForm("ProjectInvestmentScale", "", false)) {
            Message("请输入项目投资规模!", true);
            return;
        } else if (!checkForm("ProjectServiceRequest", "", false)) {
            Message("请输入项目服务要求!", true);
            return;
        } else if (!checkForm("ProjectAmount", /^\d+(\.\d+)?$/)) {
            Message("请输入正确的项目金额!", true);
            return;
        } else if (!checkForm("ProjectEndTime", "", false)) {
            Message("请输入项目完成时间!", true);
            return;
        } else {
            $(this).addClass("b-color-shui");
            AjaxService.ServiceParas = {
                ProjectID: projectID,
                ProjectTitle: $("#ProjectTitle").val(),
                ProjectType: $("#DesignFieldTwo").val(),
                ProjectProvince: $("#ProjectProvince option:selected").val() + "-" + $("#ProjectProvince option:selected").text(),
                ProjectCity: $("#ProjectCity option:selected").val() + "-" + $("#ProjectCity option:selected").text(),
                ProjectAddress: $("#ProjectAddress").val(),
                ProjectDesignPhase: $("#ProjectDesignPhase").val(),
                ProjectGeneralization: $("#ProjectGeneralization").val(),
                ProjectContent: $("#ProjectContent").val(),
                ProjectInvestmentScale: $("#ProjectInvestmentScale").val(),
                ProjectServiceRequest: $("#ProjectServiceRequest").val(),
                ProjectAmount: $("#ProjectAmount").val(),
                ProjectEndTime: $("#ProjectEndTime").val(),
                ProjectEnclosure: $("#ProjectEnclosure").val()
            };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    if (e.Message.indexOf("错误") >= 0) {
                        Message(e.Message, true);
                    } else {
                        window.location.href = "/personal/employer/project/notstartedlist.aspx";
                    }
                    $(this).removeClass("b-color-shui");

                } else {
                    Message(e.Message, true);
                    $(this).removeClass("b-color-shui");
                }
            });
        }

    });
});