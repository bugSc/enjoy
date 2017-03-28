/*
* @Author: anchen
* @Date:   2017-03-02 17:12:56
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-14 21:21:59
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
// ..........................multimedia...............................
    var $multiLi=$(".multi>ul>li");
    var $contentWrapUl=$(".content_wrap>ul");
    console.log($contentWrapUl);
    // 点击播放
    var $backMe=$("#backMe");
    var $img=$(".content_wrap>ul>li:visible img");


    $multiLi.each(function(){
        $multiLi.click(function(){
            // 点击播放
            $img=$(".content_wrap>ul>li:visible img");
                $img.click(function(){
                    var srcImg=$(this).attr("src");
                    $backMe.attr("src",srcImg)
                })
            // 切换筛选
            $contentWrapUl.eq($(this).index()).slideDown().siblings().slideUp();
            $(this).addClass("multider").siblings().removeClass('multider');
        })
    })

