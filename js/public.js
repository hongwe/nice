/*
说明:
基于JQuery的JS Ajax的异步处理

参数:
ServiceString: 被调用的类名
ServiceURL:指定的ashx文件 默认为/common.ashx
ServiceParas: 参数集合
ServiceType: 默认为json类型
ServiceExcute: 执行异步方法 返回JSON串
    
使用:
    
AjaxService.ServiceString = "Class1";
或
AjaxService.ServiceString = "<%=AjaxServiceString %>";
    
AjaxService.ServiceExcute(function (e) {
alert(e.Message);
});
*/
var AjaxService = {
    ServiceString: "",
    ServiceURL: "/common.ashx",
    ServiceParas: {},
    ServiceType: "json",
    ServiceExcute: function (sender) {
        this.ServiceParas.ServiceString = this.ServiceString;
        $.post(this.ServiceURL, this.ServiceParas, sender, this.ServiceType);
    }
};

/*
说明:
基于artDialog插件 的提示信息处理

参数:
msg: 消息文本
isError: 是否为错误信息

使用:
Message("您输入的信息有误!",true);
*/
var Message = function (msg, isError, callbackOk, callbackCancel, time) {
    if (typeof (callbackOk) != "function") {
        callbackOk = function () {
            this.close();
        }
    }
    if (typeof (callbackCancel) != "function") {
        callbackCancel = function () {
            this.close();
        }

    }
    if (typeof (time) == "undefined") {
        time = 3000;
    }
    $.dialog({
        lock: true,
        title: "提示",
        okValue: "确定",
        cancelValue: "取消",
        content: isError == false ? "<div class=\"success\">" + msg + "</div>" : "<div class=\"error\">" + msg + "</div>",
        time: time,
        ok: callbackOk,
        cancel: callbackCancel
    });
}

var checkForm = function (id, test, isnull) {
    var object;
    if (id instanceof jQuery)
        object = id;
    else
        object = $("#" + id);
    var obj = object.val();
    if (typeof (isnull) != "undefined") {
        if (!isnull && $.trim(obj) == "") {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").show();
            objs.find(".ok").hide();
            return false;
        }
        else {
            var objs = object.parent(".info2").siblings(".info3");
            objs.find(".cuowu").hide();
            objs.find(".ok").show();
            return true;
        }
    }


    if (test.test(obj)) {
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