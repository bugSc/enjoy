/*
* @Author: anchen
* @Date:   2017-03-01 10:46:50
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-07 21:43:31
*/

'use strict';
// .......................动画返回顶部.........................
function topFn(){
            var start=document.body.scrollTop || document.documentElement.scrollTop;
            var end=0;
            var change=end-start;
            var t=0;
            var endT=20;
    var tweentimer=setInterval(function(){
        if(t>=endT){
                clearInterval(tweentimer);
            }else{
                  var ptop=Tween.Quart.easeOut(t,start,change,endT);
                    document.body.scrollTop=document.documentElement.scrollTop=ptop;
            }
            t++;
    },100);
}
// .......................联系我们.............................
// 点击显示隐藏事件函数
function hideShowFn(eleO,eleT){
    for(var i=0; i<eleO.length; i++){
            // 赋予下标值
            eleO[i].index=i;
        eleO[i].onclick=function(){
            // 保存当前被点击元素的下标值
            var index=this.index;
            // 遍历让元素eleO全部背景颜色为原来色，eleT全部为隐藏
            // 在遍历当中，如果遍历对象不一样，变量是不共享的。
            for(var j=0; j<eleT.length; j++){
                eleT[j].style.display="none";
                eleO[j].style.backgroundColor="gray";
            }
            eleT[index].style.display="block";
            this.style.backgroundColor="transparent";
        }
    }
}
// 点击隐藏事件函数
function hideFn(ele){
    for(var i=0; i<ele.length; i++){
        // 赋予下标值
         ele[i].index=i;
        ele[i].onclick=function(){
            // 让其父级的父级元素隐藏
            this.parentNode.parentNode.style.display="none";
            // 让其父级的父级的上一个兄弟的上一兄弟添加背景颜色（第一个上一个兄弟是“空格”）
            this.parentNode.parentNode.previousSibling.previousSibling.style.backgroundColor="gray";
        }
    }
}
