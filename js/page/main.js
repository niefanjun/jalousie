define(function(require, exports, module) {
    var $ = require('jquery');
    var Change_Speed = 500; //page切换的时间间隔
    var now;

    function showt3() {
        $("#t3").animate({
            opacity: 1,
            top: 0
        }, 300);
    };

    function cloudpass() {
        console.log(now);
        if (now.attr('id') == 'y1') {
            now = $('.yun#y2');
            console.log("ok1");
        } else if (now.attr('id') == 'y2') {
            console.log('ok2');
            now = $('.yun#y3');
        } else if (now.attr('id') == 'y3') {
            now = $('.yun#y1');
        }
        now.css('left', '1024px'); //重置云朵位置
        now.animate({
            left: -1024
        }, 20000) //飘动
        setTimeout(cloudpass, 10000); //执行下一个递归
    }

    function movepage1() {
        $('.page1').animate({
            textIndent: 0
        }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            },
            duration: Change_Speed
        }, 'linear');
    };

    function movepage2() {
        $('.page2').removeClass('noshow'); //删除display:none属性
        $('.page2').animate({
            textIndent: 0
        }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            },
            duration: Change_Speed
        }, 'linear');
        $('.page1').animate({
            textIndent: -90
        }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            },
            complete: function() {
                $(this).addClass('noshow');
            },
            duration: Change_Speed
        }, 'linear');
    };

    function movepage3() {
        $('.page3').removeClass('noshow'); //删除display:none属性
        $('.page3').animate({
            textIndent: 0
        }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            },
            duration: Change_Speed
        }, 'linear');
        $('.page2').animate({
            textIndent: -90
        }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            },
            complete: function() {
                $(this).addClass('noshow');
            },
            duration: Change_Speed
        }, 'linear');
    };

    //显示海报
    function showfinal() {
        $('.final').animate({
            opacity: 1
        }, 1000)
    };
    //显示标题
    function showtitle() {
        $('#t1').animate({
            opacity: 1
        }, 300, function() {
            $('#t2').animate({
                opacity: 1,
                top: 0
            }, 300);
            setTimeout(showt3, 50);

        });
    };
    //显示云彩
    function showcloud() {
        now = $('.yun#y1');
        $('.yun').animate({
            opacity: 1
        }, 500);
        now.animate({
            left: -1024
        }, 10000)
        cloudpass();
    };

    function showlight() {
        $('.light').animate({
            opacity: 0.5
        }, 500);
    }

    function play() {
        setTimeout(movepage1, 5000);
        setTimeout(movepage2, 7000);
        setTimeout(movepage3, 9000);
        setTimeout(showfinal, 10000);
        setTimeout(showtitle, 11000);
        setTimeout(showcloud, 11500);
        setTimeout(showlight, 12000);
    }
    $(document).ready(function() {
        $('.play').click(function(event) {
            play();
        });
        $('.showpage1').click(function() {
            movepage1();
        });
        $('.showpage2').click(function() {
            movepage2();
        });
        $('.showpage3').click(function() {
            movepage3();
        });
        $('.showposter').click(function() {
            showfinal();
        });
        $('.showtitle').click(function() {
            showtitle();
        });
        $('.showcloud').click(function() {
            showcloud();
        });
        $('.showlight').click(function() {
            showlight();
        });
    });
});