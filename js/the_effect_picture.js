/*
* @Author: anchen
* @Date:   2017-03-02 17:12:56
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-14 21:46:05
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
// .................the_effect_picture............................
// 瀑布流布局
var arrH=[];
changePoFn();
function changePoFn(){
    var lis=document.querySelectorAll(".picture_wrap>ul>li")
    var liW=document.querySelector(".picture_wrap>ul>li:first-child").offsetWidth;
    var pictureWrap=document.querySelector(".picture_wrap");
    // 计算列数
    var sum=parseInt(document.documentElement.clientWidth/liW);
    // 遍历判断图片排列方式
    for(var i=0;i<lis.length;i++){
        if (i<sum) {
            lis[i].style.top=0+"px";
            lis[i].style.left=i*liW+'px';
            arrH[i]=lis[i].offsetHeight;
        }else{
            var minIndedx= minHeightFn(arrH);
            lis[i].style.left=minIndedx*liW+'px';
            lis[i].style.top=arrH[minIndedx]+10+'px';
            arrH[minIndedx] +=lis[i].offsetHeight+10;
        }
    }
    // 赋予父级高度
    var maxIndex=maxHeightFn(arrH);
    pictureWrap.style.height=arrH[maxIndex]+"px";
}
// 浏览器窗口改变重新调用函数
window.onresize=function(){
    var arrH=[];
    changePoFn();
}
// 判断图片的最少高度
function minHeightFn(arr){
    var min=0;
    var minH=arr[0];
   for(var i=0;i<arr.length;i++){
        if (minH>arr[i]) {
            minH=arr[i];
            min=i;
        }
   }
   return min;
}
// 判断图片的最大高度
function maxHeightFn(arr){
    var max=0;
    var maxH=arr[0];
   for(var i=0;i<arr.length;i++){
        if (maxH<arr[i]) {
            maxH=arr[i];
            max=i;
        }
   }
   return max;
}

    //瀑布流筛选
var $menuSwitch=$(".menuSwitch>ul>li");
$menuSwitch.on("click",function(){
    $(this).addClass("effect").siblings().removeClass("effect");

})

// 图片放大查看
    var $wrapli=$(".picture_wrap>ul>li");
    var $wrapImg=$(".picture_wrap>ul>li>img");
    var $flowParent=$(".flow");
    var $flow=$(".flow>div>img:first-child");
    var $flowCloss=$(".flow>div>img:nth-of-type(2)");
    var $flowDiv=$(".flow>div")


    var index=0;
$wrapli.on("click", function(){
    // 获取被点击元素的下标值
    index=$(this).index();
    // 遮罩层浮现
    $flowParent.show();
    scaleFn()
})
// 点击遮罩层消失
$flowCloss.on("click",function(){
    $flowParent.hide();
})
function scaleFn(){
    // 获取当前被点击图片的图片地址
    var imgSrc=$wrapImg.eq(index).attr("src");
    // 放大图片图片
    $flow.attr("src",imgSrc);

    // 获取被点击的原图片宽高
    var $oldW= $flow.width();
    var $oldH= $flow.height();
    // 计算图片新的宽高
     var $newH = $(window).height()*0.8;
     var $newW = $oldW/$oldH*$newH;

    //     var scale=$newW/$newH;
    // // 判断图片比例
    // // 计算图片新的宽高
    // if($newW>$newH){
    //     $flow.css({
    //         "width":$(window).width()*0.8,
    //         "height":$(window).width()*0.6/scale
    //     })
    // }else{
    //     $flow.css({
    //         "height":0.8*$(window).height(),
    //         "width":0.8*$(window).height()*scale
    //     });
    // }
    // // 赋予放大图片left top值
    // var $top=($(window).height()-$flow.outerHeight())/2;
    // var $left=($(window).width()-$flow.outerWidth())/2;

    // 判断图片比例
    if(0.6*$(window).width()*$flow.outerHeight()/$flow.outerWidth()>$(window).height()*0.8){
        $flow.css({
            "width":$newW
        })
    }else{
        $flow.css({
            "width":0.6*$(window).width()
        });
    }

    // 赋予放大图片left top值
    var $top=($(window).height()-$flow.outerHeight())/2;
    var $left=($(window).width()-$flow.outerWidth())/2;

    $flowDiv.css({
        "top":$top,
        "left":$left
    })
}
// 切换图片
    var $flowleft=$(".flow>div>img:nth-of-type(3)");
    var $flowright=$(".flow>div>img:nth-of-type(4)");
    $flowleft.on("click",function(){
        index++;
        if(index>=$wrapImg.length-1){
            index=0;
        }
        scaleFn();
    })

    $flowright.on("click",function(){
        index--;
        if(index<=0){
            index=$wrapImg.length-1;
        }
        scaleFn();
    })