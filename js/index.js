$(function () {
//    初始化fullpage组件
    /*设置每一个屏幕的背景颜色*/
    /*设置屏幕内容的对齐方式 默认是垂直居中的 改成顶部对齐
    * 设置导航 设置指示器 点容器*/
    $('.container').fullpage({
        /*配置参数*/
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        }
    })
})