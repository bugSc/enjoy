/*
* @Author: anchen
* @Date:   2017-03-02 17:12:56
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-14 21:46:21
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
// .........................3D_interaction.......................
// .............................房产三维互动..............................
// 大图切换
    var $cutLeft=$(".cutLeft");
    var $cutRight=$(".cutRight");
    // 左边的图片
    var $houseLeftUl=$(".houseLeft>ul");
    var $houseLeftLi=$(".houseLeft ul:visible li");
    // 右边的图片
    var $houseRight=$(".houseRight>ul>li");
    // 切换大图
    $houseRight.on("click",function(){
        $houseLeftUl.hide();
        $houseLeftUl.eq($(this).index()).show();
        $houseLeftLi=$(".houseLeft ul:visible li");
    })
    var index=0;
    // 第一张大切换图
       $cutLeft.on("click",function(){
        $houseLeftLi=$(".houseLeft ul:visible li");
                index--;
                if(index<=-1){
                    index=$houseLeftLi.length-1;
                    $houseLeftLi.eq($houseLeftLi.length-1).show()
                }
                $houseLeftLi.eq(index).show().siblings().hide();
       });
       $cutRight.on("click",function(){
            index++;
            if(index>$houseLeftLi.length-1){
                index=0;
                $houseLeftLi.eq(0).show();
            }
             $houseLeftLi.eq(index).show().siblings().hide();
       });
// .............................房产三维互动........................
// ..........................整体图片切换........................
    var $handover=$(".handover");
    // console.log($handover);
    var $switchTopic=$(".switchTopic>ul>li");
    // console.log($switchTopic)
    $switchTopic.on("click",function(){
        $handover.hide();
        $handover.eq($(this).index()).show();
        $(this).addClass("bottom").siblings().removeClass("bottom");
    })

// ..........................整体图片切换........................
//.............................工业三维互动.........................
    var $manufactureRightLi=$(".manufactureRight>ul>li");
    var $manufactureRight=$(".manufactureRight>ul");
    var $manufactureLeftU=$("#manufacture>.industryLeft>ul>li");
    $manufactureRightLi.on("click",function(){
        $manufactureLeftU.eq($(this).index()).show().siblings().hide();
    });

//.............................工业三维互动..........................
//...........................家居三维互动.......................
    var $gearLi=$(".gear>ul>li");
    var $gearLeftU=$("#gear>.industryLeft>ul>li");
    var $gearUL=$(".gear>ul");
    $gearLi.on("click",function(){
        $gearLeftU.eq($(this).index()).show().siblings().hide();
    });
//...........................家居三维互动.......................
// 向上移动
    var $current=$(".current>ul");
    var $advantages=$(".advantages>ul");
    var scrollTop=document.documentElement.clientHeight;
    $(window).scroll(function(){
        if($("body").scrollTop()>scrollTop-600){
            $current.animate({
                "margin-top":"0"
            },1000,"easeOutBounce");
        }
    });
    $(window).scroll(function(){
        if($("body").scrollTop()>scrollTop-300){
            $advantages.animate({
                "margin-top":"0"
            },1000,"easeOutBounce");
        }
    })
