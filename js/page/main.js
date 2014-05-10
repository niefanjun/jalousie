define(function(require, exports, module) {
    var $ = require('jquery');
    var Change_Speed = 500; //page切换的时间间隔
    var now;
    var page = {url:[],flag:999};
    
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



    //下面为js动态页面加载代码
    //加载page
    function loadpage2(page){
        $('.title').append('<img id="t1" src="../image/title-1.png">');
        //$('#c1').append('<img class="page'+num+' row1 noshow" src="../image/'+num+'-1.png">');
        //$('#c2').append('<img class="page'+num+' row1 noshow" src="../image/'+num+'-2.png">');
        //$('#c3').append('<img class="page'+num+' row1 noshow" src="../image/'+num+'-3.png">');
        //$('#c4').append('<img class="page'+num+' row1 noshow" src="../image/'+num+'-4.png">');
    }
    //加载百叶窗
    function loadpage(num){
        page.url = ['../image/'+num+'-1.png','../image/'+num+'-2.png','../image/'+num+'-3.png','../image/'+num+'-4.png'];
        page.flag = 4;
        var img = new Array();
        for(var key in page.url){
            img[key] = new Image();
            img[key].src = page.url[key];
            img[key].onload = function(key){
                page.flag--;
                var index = parseInt(key);
                index++;
                console.log(page.flag);
                console.log('load pic'+key);
                console.log('page'+num+' row'+index+' noshow')
                $(img[key]).addClass('page'+num+' row'+index+' noshow');
                var now_row = '#c'+index;
                console.log('nowrow:'+now_row);
                $(now_row).append(img[key]);
                if(page.flag <= 0){
                    console.log('load all');
                    
                }

            }(key);
        }
    }
    function loadfinal(){
        var img = new Image();
        img.src = '../image/final.png';
        img.onload = function(){
            $(img).addClass('final');
            $('.main').append(img);
        }
    }
    function loadtitle(){
        page.url = ['../image/title-1.png','../image/title-2.png','../image/title-3.png'];
        page.flag = 3;
        var img = new Array();
        for(var key in page.url){
            img[key] = new Image();
            img[key].src = page.url[key];
            //img[key].onload = pageonload(key);
            img[key].onload = function(key){
                page.flag--;
                var index = parseInt(key);
                index++;
                console.log(page.flag);
                $(img[key]).attr('id', 't'+index);
                $('.title').append(img[key]);
                if(page.flag <= 0){
                    console.log('load all');
                }

            }(key);
        }
    }
    /*function loadcloud(){
        var img = new Array();
        for(var i=0;i<6;i++){
            img[i].src = '../image/yun.png'
        }
        img.src = '../image/yun.png';
        img.onload = function(){
            $(img).addClass('yun top').attr('id', 'y1');
            $('.main').append(img);
            $(img).attr('id', 'y2');
            $('.main').append(img);
            $(img).attr('id', 'y3');
            $('.main').append(img);
            $(img).removeClass('top').addClass('bottom').attr('id', 'y1');
            $('.main').append(img);
            $(img).attr('id', 'y2');
            $('.main').append(img);
            $(img).attr('id', 'y3');
            $('.main').append(img);
            $('.main').append(img);
            //var img2 = new Image(img);
            $('.title').append(img);
        }
    }*/
    function loadlight(){
        var img = new Image();
        img.src = '../image/l.png';
        img.onload = function(){
            $(img).addClass('light');
            $('.main').append(img);
        }
    }
    function onloadpic(){
        //$('body').delegate('#t1', 'load', function() {
        //    console.log('loadpic');
        //});
        console.log('in onloadpic')
        if($('#t2').complete)
            console.log('load id2');
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
            loadpage(2);
        });
        $('.showpage2').click(function() {
            movepage2();
            loadpage(3);
        });
        $('.showpage3').click(function() {
            movepage3();
            loadfinal();
        });
        $('.showposter').click(function() {
            showfinal();
            loadtitle();
        });
        $('.showtitle').click(function() {
            showtitle();
        });
        $('.showcloud').click(function() {
            showcloud();
            loadlight();
        });
        $('.showlight').click(function() {
            showlight();
        });
        $('.testforany').click(function() {
            
            loadpage(2);

            /*var img = new Image();
            img.src = "../image/1-2.png";
            img.onload = function(){
                console.log('img_load');
                $(img).attr('id', 't1');
                $('.title').append(img);
            };*/
        });

    });
    exports.onloadpic = onloadpic;
});