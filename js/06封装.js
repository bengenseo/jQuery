$.fn.extend({
    bgBanner:function(sel){
        $(sel+" .bannerList li").each(function(i,item){
            $(item).css("transform","translate("+i*800+"px,0)");
            //创建小圆点
            var itemDom=$("<li></li>");
            //设置class
            itemDom.attr("class","item");
            itemDom.appendTo(sel+" .itemList");
        });
        //设置第一个小圆点默认添加active
        $(sel+" .item").eq(0).addClass("active");
        var page=0;
        //添加样式函数
        function classStyle(){
            $(sel+" .bannerList li").css("left",-page*800);
            $(sel+" .item").removeClass("active").eq(page).addClass("active");
        }
        //下一页函数
        function bannerNext(){
            page++;
            if(page>=$(sel+" .bannerList li").length){
                page=0;
            }
            classStyle();
        }
        //上一页
        $(sel+" .prev").click(function(){
            page--;
            if(page<0){
                page=$(sel+" .bannerList li").length-1;
            }
            classStyle();
        });
        
        //下一页
        $(sel+" .next").click(function(){
            bannerNext();
        });
        //自动轮播
        var setId=setInterval(function(){
            bannerNext();
        },1500);
        //鼠标移开
        $(sel).mouseleave(function(){
            setId=setInterval(function(){
                bannerNext();
            },1500);
        });

        //鼠标移入停止自动轮播
        $(sel).mouseover(function(){
            clearInterval(setId)
        });
        //小圆点功能
        $(sel+" .item").click(function(e){
            page=$(this).index();
            classStyle();
        });
    }
});