define(function(require, exports, module){
    var $ = require("jquery");
    var Change_speed = 500;//page切换的时间间隔
    var now_top;
    var showt3 = function(){
        $("#t3").animate({opacity: 1, top: 0}, 300);
    };
    var clothpass = function(){
        console.log(now_top);
        if (now_top.attr('id') == "y1"){
            now_top = $(".top#y2");
            console.log("ok1");
        }
        else if(now_top.attr('id') == "y2"){
            console.log("ok2");
            now_top = $(".top#y3");
        }
        else if(now_top.attr('id') == "y3"){
            now_top = $(".top#y1");
        }
        now_top.css('left', '1024px');//重置云朵位置
        now_top.animate({left:-1024}, 20000)//飘动
        setTimeout(clothpass,10000);//执行下一个递归
    }
    $(".test_btn_1").click(function() {
        $(".page1").animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            duration: Change_speed
        },'linear');
    });

    $(".test_btn_2").click(function() {
        $(".page2").removeClass('noshow');//删除display:none属性
        $(".page2").animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            duration: Change_speed
        },'linear'
        );
        $(".page1").animate({  textIndent: -90 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                $(this).addClass('noshow');
            },
            duration: Change_speed
        },'linear');
    });
        
    $(".test_btn_3").click(function(){
        $(".page3").removeClass('noshow');//删除display:none属性
        $(".page3").animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            duration: Change_speed
        },'linear'
        );
        $(".page2").animate({ textIndent: -90 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                $(this).addClass('noshow');
            },
            duration: Change_speed
        },'linear');    
    });

    $(".test_btn_4").click(function() {
        $(".final").animate({opacity:1}, 1000)
    });
    $(".test_btn_5").click(function() {
        $("#t1").animate({opacity:1}, 300,function(){
            $("#t2").animate({opacity: 1, top: 0}, 300);
            setTimeout(showt3,50);

        });
    });
    $(".test_btn_6").click(function() {
        now_top = $(".top#y1");
        $(".top").animate({opacity:1}, 500);
        now_top.animate({left:-1024}, 10000)
        clothpass();
    });
    $(".test_btn_reset").click(function() {
        $(".container img").css('text-indent', '90px');
        $(".container img").css('-webkit-transform','rotateY(90deg)');
        $(".page1").removeClass('noshow');
        $(".page2").addClass('noshow');
        $(".page3").addClass('noshow');
    });

});