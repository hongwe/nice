var editor;
KindEditor.ready(function (K) {
    editor = K.create("#ShareContent", {
        resizeType: 0,
        allowFileManager: true,
        urlType: "absolute",
        uploadJson: "/ajax/kindeditopruploadimage.ashx?path=/uploadImage",
        height: "300px", //编辑框高度
        width: "100%", //编辑框宽度
        cssPath: ['/css/kindeditor/share.css'],
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
    $("#NiceShareFile").uploadify({
        width: 125,
        height: 34,
        uploader: "/js/uploadify/uploadify.swf",
        script: "/ajax/uploadsharefile.ashx",
        auto: true,
        multi: true,
        simUploadLimit: 1,
        sizeLimit: 1024000000,
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
        } else {
            if ($("#NiceShareFileID").val().indexOf(response) >= 0) {
                Message("该文件已经存在,请重新上传!", true);
                return;
            }

            $(".deleteFile").unbind("click");
            var html = '<p><img src="/images/common/biez.png" /><span class="ml30" data-val="' + response + '">' + response.substring(response.lastIndexOf('/') + 1) + '</span><a href="javascript:;" class="f-color-h deleteFile ml20">删除</a></p>';
            $("#NiceShareFiles").append(html);
            var files = shareFiles();
            $("#NiceShareFileID").val(files);
            $(".deleteFile").click(function () {
                $(this).parent().remove();
                var files = shareFiles();
                $("#NiceShareFileID").val(files);
            });
        }
    }

    $("#submit").click(function () {
        if ($(this).hasClass("b-color-shui")) return;

        var ShareTitle = $("#ShareTitle");
        var NiceShareTypeID = $("#NiceShareTypeID");
        var ShareSource = $("#ShareSource");
        var ShareAuthor = $("#ShareAuthor");
        var ShareContent = $("#ShareContent");
        var IsShare = $("#IsShare:checked");
        var IsHome = $("#IsHome:checked");
        var NiceShareFileID = $("#NiceShareFileID");
        var ShareImageSrc = $("#ShareImageSrc");
        if (!checkForm(ShareTitle, "", false)) {
            Message("请填写标题!", true);
            return;
        } else if (NiceShareTypeID.val() == "0") {
            Message("请选择分享类型!", true);
            return;
        } else if (!checkForm(ShareSource, "", false)) {
            Message("请填写分享来源!", true);
            return;
        } else if (!checkForm(ShareAuthor, "", false)) {
            Message("请填写分享作者!", true);
            return;
        } else if (!checkForm(ShareContent, "", false)) {
            Message("请填写分享内容!", true);
            return;
        }

        $(this).addClass("b-color-shui");
        AjaxService.ServiceParas = {
            ShareTitle: ShareTitle.val(),
            NiceShareTypeID: NiceShareTypeID.val(),
            ShareSource: ShareSource.val(),
            ShareAuthor: ShareAuthor.val(),
            ShareContent: ShareContent.val(),
            IsShare: IsShare.length,
            IsHome: IsHome.length,
            NiceShareFileID: NiceShareFileID.val(),
            ShareImageSrc: ShareImageSrc.val()
        };
        AjaxService.ServiceExcute(function (e) {
            if (e.Success) {
                ShareTitle.val("");
                NiceShareTypeID.val("");
                ShareSource.val("");
                ShareAuthor.val("");
                ShareContent.val("");
                ShareImageSrc.val("");
                Message("发布信息成功,请等待审核!", false, function () { window.location.href = "list.aspx"; }, function () { window.location.href = "list.aspx"; }, 600000);
            } else {
                Message(e.Message, true);
            }
        });
    });




    $("#editsubmit").click(function () {



        if ($(this).hasClass("b-color-shui")) return;

        var ShareTitle = $("#ShareTitle");
        var NiceShareTypeID = $("#NiceShareTypeID");
        var ShareSource = $("#ShareSource");
        var ShareAuthor = $("#ShareAuthor");
        var ShareContent = $("#ShareContent");
        var IsShare = $("#IsShare:checked");
        var IsHome = $("#IsHome:checked");
        var NiceShareFileID = $("#NiceShareFileID");
        var ShareImageSrc = $("#ShareImageSrc");
        if (!checkForm(ShareTitle, "", false)) {
            Message("请填写标题!", true);
            return;
        } else if (NiceShareTypeID.val() == "0") {
            Message("请选择分享类型!", true);
            return;
        } else if (!checkForm(ShareSource, "", false)) {
            Message("请填写分享来源!", true);
            return;
        } else if (!checkForm(ShareAuthor, "", false)) {
            Message("请填写分享作者!", true);
            return;
        } else if (!checkForm(ShareContent, "", false)) {
            Message("请填写分享内容!", true);
            return;
        }
        Message("提交后需要重新审核! 你确定要提交吗?", false, function () {
            $(this).addClass("b-color-shui");
            AjaxService.ServiceParas = {
                NiceShareID : NiceShareID,
                ShareTitle: ShareTitle.val(),
                NiceShareTypeID: NiceShareTypeID.val(),
                ShareSource: ShareSource.val(),
                ShareAuthor: ShareAuthor.val(),
                ShareContent: ShareContent.val(),
                IsShare: IsShare.length,
                IsHome: IsHome.length,
                NiceShareFileID: NiceShareFileID.val(),
                ShareImageSrc: ShareImageSrc.val()
            };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    Message("编辑信息成功,请等待审核!", false, function () { window.location.href = "list.aspx"; }, function () { window.location.href = "list.aspx"; }, 600000);
                } else {
                    Message(e.Message, true);
                }
            });
        }, "", 600000)
    });

    $("#uploadifyImage").uploadify({
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
            $("#ShareFirstImg").attr("src", response);
            $("#ShareImageSrc").val(response);
        }
    }
    var shareFiles = function () {
        var str = "";
        $("#NiceShareFiles p span[data-val]").each(function (i, n) {
            var cur = $(n);
            var valall = cur.attr("data-val");
            str += valall + ",";
        });
        return str;
    }

    $(".deleteFile").click(function () {
        $(this).parent().remove();
        var files = shareFiles();
        $("#NiceShareFileID").val(files);
    });
});