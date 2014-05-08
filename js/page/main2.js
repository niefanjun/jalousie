define(function(require, exports, module){
    var $ = require("jquery");
    $(".test_btn_1").click(function() {
        $(".page1").animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                console.log("ok");
            },
            duration: 500
        },'linear');
    });

    $(".test_btn_2").click(function() {
        $(".page2").removeClass('noshow');//删除display:none属性
        $(".page2").animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                console.log("ok");
            },
            duration: 500
        },'linear'
        );
        $(".page1").animate({  textIndent: -90 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                console.log("cancle none");
                $(this).addClass('noshow');
            },
            duration: 500
        },'linear');
    });
        
    $(".test_btn_3").click(function(){
        $(".page3").removeClass('noshow');//删除display:none属性
        $(".page3").animate({  textIndent: 0 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                console.log("ok");
            },
            duration: 500
        },'linear'
        );
        $(".page2").animate({  textIndent: -90 }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
            },
            complete: function(){
                console.log("cancle none");
                $(this).addClass('noshow');
            },
            duration: 500
        },'linear');    
    });

    $(".test_btn_reset").click(function() {
        $("img").css('text-indent', '90px');
        $("img").css('-webkit-transform','rotateY(90deg)');
        $(".page1").removeClass('noshow');
        $(".page2").addClass('noshow');
        $(".page3").addClass('noshow');
    });
});