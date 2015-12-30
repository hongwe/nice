/**
 * Created by hh on 2015/9/18.
 */
function afterText() {

    var txt1 = $("<div class='linebox'></div>").html("<div class='del01'><a href='###'>删除</a></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>毕业院校：</div><div class='info2'><input type='text' class='text' name='DesignerSchool' /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>就读时间：</div><div class='info2'><input type='text' class='time' name='DesignerStartTime' readonly onfocus=\"WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd'});\" />至<input type='text' class='time' name='DesignerEndTime' readonly onfocus=\"WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd'});\" /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>学历：</div><div class='info2'><input type='text' class='text' name='DesignerDiplomas' /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>专业：</div><div class='info2'><input type='text' class='text' name='DesignerMajor' /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div>");     // 通过 jQuery 创建元素


    $(".linebox:last").after(txt1);
}
function afterText01() {

    var txt2 = $("<div class='linebox01'></div>").html("<div class='del01'><a href='###'>删除</a></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>工作单位：</div><div class='info2'><input type='text' class='text' name='DesignerCompany' /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>工作时间：</div><div class='info2'><input type='text' class='time' name='DesignerStartDate'  readonly onfocus=\"WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd'});\" />至<input type='text' class='time'  name='DesignerEndDate'  readonly onfocus=\"WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd'});\" /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>所在部门：</div><div class='info2'><input type='text' class='text' name='DesignerSection' /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'><span class='f-color-r'>*</span>职位：</div><div class='info2'><input type='text' class='text' name='DesignerPosition' /></div><div class='info3'><div class='ok'></div><div class='cuowu'>输入错误</div></div></div><div class='line clear'><div class='info1'>工作描述：</div><div class='info4'><textarea rows='8' name='DesignerWorkDes'></textarea></div></div>");     // 通过 jQuery 创建元素


    $(".linebox01:last").after(txt2);
}
$(function () {
    $(".subNav").click(function () {
        $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
        $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt");
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
    })

    $(".navContent li").click(function () {
        $(".navContent li").removeClass("active");
        $(this).addClass("active");
    })

    $(".buttonbcsh").click(function () {
        $(this).toggleClass("buttonsh");

    })
    $(document).on('click', '#next01', function () {
        $("#tab01").removeClass("yes");
        $("#tab02").addClass("yes");
        $("#I_tab1").removeClass("no");
        $("#I_tab0").addClass("no");
    })
    $(document).on('click', '.del01', function () {
        $(this).parent().remove();
    })


//    $(document).on( 'click','.opendb', function(){
//        $(this).addClass("dqopen")
//        $("div").removeClass("dbmainon");
//        $(this).next().toggleClass("dbmainon")

//    })
//    $(document).on( 'click','.dqopen', function(){
//        $(this).removeClass("dqopen")
//        $("div").removeClass("dbmainon");


//    })
//    $(document).on( 'click','.unread', function(){
//        $(this).removeClass("unread");
//        $(this).addClass("read");
//    })

});

