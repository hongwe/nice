$(function () {
    $(".colactive button").click(function () {
        var currbtn = $(this);
        var id = currbtn.data("id");
        var type = currbtn.data("type");
        if (type == "xmfk") {
            window.location.href = "/personal/employer/project/alipay.aspx?id=" + id;
        } else if (type == "bjrw") {
            window.location.href = "/personal/employer/project/edit.aspx?id=" + id;
        } else if (type == "scrw") {
            Message("您确定要删除吗? 一旦删除将无法恢复!", false, function () {
                AjaxService.ServiceParas = {
                    type: "scrw",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);

        } else if (type == "bjrw") {
            window.location.href = "/personal/employer/project/edit.aspx?id=" + id;
        } else if (type == "sqtk") {
            Message("您确定要申请退款吗? 一旦申请将无法恢复!", false, function () {
                AjaxService.ServiceParas = {
                    type: "sqtk",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "xzsj") {
            window.location.href = "/project/detail.apsx?id=" + id;
        } else if (type == "qxtk") {
            Message("您确定要取消退款申请吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "qxtk",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "qxsq") {
            Message("您确定要取消申请完成吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "qxsq",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "jssq") {
            Message("您确定要接受申请完成吗? 一旦确定则无法恢复！", false, function () {
                AjaxService.ServiceParas = {
                    type: "jssq",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "jjsq") {
            Message("您确定要拒绝申请完成吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "jjsq",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "tjsh") {
            Message("您确定要提交审核吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "tjsh",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "qxcy") {
            Message("您确定要取消参与吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "qxcy",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "qxsqd") {
            Message("您确定要取消申请完成吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "qxsqd",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "jssqd") {
            Message("您确定要接受申请完成吗? 一旦确定则无法恢复！", false, function () {
                AjaxService.ServiceParas = {
                    type: "jssqd",
                    id: id
                };
                AjaxService.ServiceExcute(function (e) {
                    if (e.Success) {
                        window.location.href = window.location.href;
                    } else {
                        Message(e.Message, true);
                    }
                });
            }, "", 600000);
        } else if (type == "jjsqd") {
            Message("您确定要拒绝申请完成吗? ", false, function () {
                AjaxService.ServiceParas = {
                    type: "jjsqd",
                    id: id
                };
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
});