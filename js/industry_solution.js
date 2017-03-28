/*
* @Author: anchen
* @Date:   2017-03-02 17:12:56
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-04 17:24:38
*/

'use strict';
// .........................滚动条................................
    // 滚轮跳转页面
    var wrap=document.getElementsByClassName("wrap")[0];
    //点击返回页面顶部
    var jumpTop=document.getElementsByClassName("jump_top")[0];
    // 点击跳转到页面底部
    var toBottom=document.getElementById("to_bottom");
    // 获取头页面的高度
    var navWrap=document.getElementsByClassName("nav_wrap")[0];
// 点击返回顶部事件
window.onscroll=function(){
    // 判断显示隐藏
    var scroll=document.body.scrollTop||document.documentElement.scrollTop;
    if(scroll>=wrap.offsetHeight){
        jumpTop.style.display="block";
    }else{
        jumpTop.style.display="none";
    }
}
jumpTop.onclick=function(){
        topFn();
}
// .......................联系我们..................................
    var contact=document.getElementsByClassName("contact");
    var inputBox=document.getElementsByClassName("input_box");
    var hideimg=document.getElementsByClassName("hideimg");
// 调用点击显示隐藏函数
hideShowFn(contact,inputBox);
// 点击隐藏
hideFn(hideimg);
// .......................导航菜单...................................
$("#jumpa").click(function(){
    $("#jumpmenu").slideToggle();
})
// .........................industry_solution.......................
// hover事件
    var $industryLi=$(".industry>li");
    var $industryDiv=$(".industry>li>div");
    var $industryP=$(".industry>li>p");

$industryLi.each(function(){
    $industryLi.hover(function(){
            $industryDiv.eq($(this).index()).css({
                "display":"block"
            });
            $industryP.eq($(this).index()).css({
                "display":"block"
            });
    },function(){
        $industryLi.each(function(){
            $industryDiv.eq($(this).index()).css({
                "display":"none"
            });
            $industryP.eq($(this).index()).css({
                "display":"none"
            });
        })
    })
})


