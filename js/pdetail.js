$(function () {
    var context = $("#context");
    var images = context.find("img,image");
    images.load(function () {
        if ($(this).width() > context.width()) {
            $(this).width(context.width());
        }
    });
    sodo();
    $(window).scroll(sodo);
    $(window).resize(sodo);
    $(".baominguesr li").click(function () {
        if ($(this).hasClass("selected")) {
            $(".baominguesr li").removeClass('selected');
        } else {
            $(".baominguesr li").removeClass('selected');
            $(this).addClass('selected');
        }
    });
    //选择申请设计师
    $("#selectdesign").click(function () {
        var length = $(".baominguesr li.selected").length;
        if (length <= 0) {
            Message("至少选择一个设计师!", true);
        } else {
            Message("您确定要选择此设计师来接此项目吗?", false, function () {
                var id = $(".baominguesr li.selected").data("id");
                AjaxService.ServiceParas = { pid: pid, id: id, type: "apply" };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        }
    });
    //删除选中设计师
    $("#delDesigner").click(function () {
        Message("您确定要删除选定的设计师吗?", false, function () {
            AjaxService.ServiceParas = { pid: pid, id: 0, type: "deldes" };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    window.location.href = window.location.href;
                } else {
                    Message(e.Message, true);
                }
            });
        }, "", 600000);
    });

    //申请参与此项目
    $("#attend").click(function () {
        Message("您确定要申请参与此项目吗?", false, function () {
            AjaxService.ServiceParas = { pid: pid, id: 0, type: "attend"};
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    window.location.href = window.location.href;
                } else {
                    Message(e.Message, true);
                }
            });
        }, "", 600000);
    });
    $(".delContract").click(function () {
        var id = $(this).data("id");
        Message("您确定要删除合同吗?", false, function () {
        
            AjaxService.ServiceParas = { pid: pid, id: id, type: "delContract" };
            AjaxService.ServiceExcute(function (e) {
                if (e.Success) {
                    window.location.href = window.location.href;
                } else {
                    Message(e.Message, true);
                }
            });
        }, "", 600000);
    });
    $("#uploadifyProjectContractSrc").uploadify({
        width: 110,
        height: 110,
        uploader: "/js/uploadify/uploadify.swf",
        script: "/ajax/uploadProjectContractfile.ashx",
        cancelImg: "/images/cancelfile.png",
        auto: true,
        multi: true,
        simUploadLimit: 1,
        sizeLimit: 102400000,
        buttonImg: "/images/project/ht03.png",
        onComplete: function (event, queueId, fileObj, response, data) {
            addFile(response);
        }
    });
});
function sodo() {
    var t = $(window).scrollTop();
    var h = $(document).height();
    var wh = $(window).height();
    if (t > 250) {
        $("#deep-info").addClass("fixedo");
    } else {
        $("#deep-info").removeClass("fixedo");
    }
    var yy = h - t - 450 - 430;
    if (h - t < 450 + 430) {
        $("#deep-info").css({
            "top": yy
        });
    } else {
        $("#deep-info").css({
            "top": "10px"
        });
    }
}


function addFile(response) {
    if (response == "-1") {
        Message("格式错误!", true);
    }
    else if (response == "-2") {
        Message("文件大小超过了限制，最大上传文件为100M!", true);
    } else {
        AjaxService.ServiceParas = { pid: pid, id: 0, type: "AddContract", con: response };
        AjaxService.ServiceExcute(function (e) {
            if (e.Success) {
                window.location.href = window.location.href;
            } else {
                Message(e.Message, true);
            }
        });
    }
}