/*
* @Author: anchen
* @Date:   2017-03-01 14:31:51
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-08 11:24:58
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
// 点击跳转到第二页面事件
toBottom.onclick=function(){
    document.body.scrollTop=document.documentElement.scrollTop=navWrap.offsetHeight;
}
// 滚动跳转页面事件

// .......................联系我们..................................
    var contact=document.getElementsByClassName("contact");
    var inputBox=document.getElementsByClassName("input_box");
    var hideimg=document.getElementsByClassName("hideimg");
// 调用点击显示隐藏函数
hideShowFn(contact,inputBox);
// 点击隐藏
hideFn(hideimg);
// .....................服务区...................................
var  $imgs=$("#service_content img");
var  $li=$("#service_content li");

 $imgs.hover(function(){
    console.log($(this).parent().index());
    var a=$(this).parent().index()+1;
    $imgs.eq($(this).parent().index()).attr('src',"image/images1/s_item"+String(a)+a+".jpg");
 },function(){
    var a=$(this).parent().index()+1;
    $imgs.eq($(this).parent().index()).attr('src',"image/images1/s_item"+a+".jpg");
 })

var  windowH=document.documentElement.clientHeight-500;
$(window).scroll(function(){
    if ($("body").scrollTop()>=windowH) {
        $("#service_content").animate({
            "margin-top":"10%"
     },1500)
    }
});
// 导航菜单
$("#jumpa").click(function(){
    $("#jumpmenu").slideToggle();
})
// 关于我们
var $nthli1=$("#about_content li:nth-of-type(1)");
var $nthli3=$("#about_content li:nth-of-type(3)");
var aboutUs=document.documentElement.clientHeight;
var bol=false;
$(window).scroll(function(){
    if($("body").scrollTop()>=aboutUs*2-500){
        $nthli1.animate({
            "left":"5%",
        },1500);
        $nthli3.animate({
            "right":"0%",
        },1500)
    }

    if (bol) {
        return;
    }
    // 企业荣耀
    if ($("body").scrollTop()>=aboutUs*3-500) {
        numberFn(1,6,$(".figure span").eq(1),500);
        numberFn(500,1000,$(".figure span").eq(0),5);
        numberFn(13,76,$(".figure span").eq(2),45);
        numberFn(8,48,$(".figure span").eq(3),70);
        numberFn(15500,16000,$(".figure span").eq(4),5);
        numberFn(5,24,$(".figure span").eq(5),145);
        numberFn(36,180,$(".figure span").eq(6),20);
        bol=true;
    }
});
//........................... 企业荣耀......................
var $figure=$(".figure span");
var numberup=(document.documentElement.clientHeight-500)*3;

function numberFn(start,end,ele,time){
    var numberTimer=setInterval(function(){
        start++;
        if (start>=end) {
            clearInterval(numberTimer);
        }
        ele.text(start);
    },time)
}