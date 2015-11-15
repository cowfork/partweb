$(function(){
    //console.log('loaded.');

    /* init */
    active_current_menu();

    /*global*/


    var off_left= $("#feed").offsetLeft;
    $(".off").css({
        left:'off_left'+600
    });

    var is_animated = false;
    var top = $("#side .go_top");
    var timer;

// header>menu 随着滚动条滚动-----start
/*
    var _menu=$('.menu');
    var _headroom = $('.headroom');
    function handle(delta) {
         var _top=$(window).scrollTop();
        if (delta<0 && _top>100){
            _menu.addClass('headroom');
            $('.menu-right').addClass('headrooom-right');
        }
        else if(_top>100) {
             _menu.removeClass('headroom');
             $('.menu-right').removeClass('headrooom-right');
        }
    }
   */  
    function wheel(event){
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta/120; 
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail/3;
        }
        if (delta)
            handle(delta);
    }
    if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
// end

//底部导航
    var schoolP = $('.school-p');
    schoolP.mouseover(function(){
        $(".footer-major-list").removeClass("active");
        $(this).parent().addClass("active");
    });
    /* feed form */

    $(".feed_me").click(function(){
        open_feed_form();
    });
    //合作机构hover效果

    //轮播效果
    //banner轮播图
    var a=0;
    t1=setInterval(dong,8000);
    function dong(){
        a++;
        if(a==2){
            $(".b_box").stop().animate({left:-a*1170},500,function(){$(".b_box").css({left:0})});
            a=0;
        }else{
            $(".b_box").stop().animate({left:-a*1170},500);
        }
        $('.b_btn_1').css({background:"#fff",width:10,height:10});
        $($(".b_btn_1")[a]).css({background:"#cb5138",width:12,height:12})
    }
//banner图上的5个按钮
    $($('.b_btn_1')[0]).css({background:'#cb5138',width:12,height:12});
    $('.b_btn_1').hover(function  () {
        clearInterval(t1);
        $('.b_btn_1').css({background:'#fff',width:10,height:10});
        $(this).css({background:'#cb5138',width:12,height:12});
        var num=$('.b_btn_1').index(this);
        //console.log(a);
        var left1=num*-1170;
        a=num;
        $('.b_box').animate({left:left1},500);
    },function  () {
        t1=setInterval(dong,8000);
        $('.b_btn_1').css({background:'#fff',width:10,height:10});
        $(this).css({background:'#cb5138',width:12,height:12});
    });
    $(".one").hover(function(){
        clearInterval(t1);
    },function(){
        t1=setInterval(dong,8000);
    });

    setTimeout(function(){
        $('.sia-center').css({display:'block'})
    },10000);
    //关闭弹出框
    $('.xll-h5-b').click(function(){
        $('.sia-center').css({display:'none'});
    });


    $("#feed .off").click(function(){
        close_feed_form();
    });
    $(".c-school").click(function(){
        $("#feed").css({
            display:'block'
        })
    });
    $(".b_s_1").click(function(){
        open_feed_form();
        $("#feed").css({
            display:'block'
        })
    });
    var flag=true;
    $('.x-side-off').click(function side(){
            //$(".open_side").animate({right:-120},500);
        $('.xll-side-green').css({marginTop:40})
        $('.xll-green').css({marginLeft:13});
            $('#side .side-content').animate({width:50,height:100},500);
        $('#side .x-side-content').css({display:'none'});
            $("#side .side-off").css({'-webkit-transform':'rotateY(180deg)'},500);
            $(".side-off").css({left:5,height:20});
        $('.xll-now').css({display:'none'});
    });
    $("#side .side-off").click(function side(){
        if(flag){
            //$(".open_side").animate({right:-120},500);
            $('.xll-side-green').css({marginTop:40})
            $('.xll-green').css({marginLeft:13});
            $('#side .x-side-content').css({display:'none'});
            $('#side .side-content').animate({width:50,height:100},500);
            $("#side .side-off").css({'-webkit-transform':'rotateY(180deg)'},500);
            $(".side-off").css({left:5,height:20});
            $('.xll-now').css({display:'none'});

            flag=false;
        }else{
            //$(".open_side").animate({right:0},500);
            $('.xll-side-green').css({marginTop:24})
            $('.xll-green').css({marginLeft:24});
            $('#side .side-content').animate({width:120,height:385},500);
            $('#side .x-side-content').css({display:'block'});
            $("#side .side-off").css({'-webkit-transform':'rotateY(0deg)'},500);
            $(".side-off").css({left:0,height:20});
            $('.xll-now').css({display:'block'});
            flag=true;
        }
    });
    $(".side-on").click(function(){
        close_side_on();
    });

    $("#side .go_top").click(function(){
        go_top($(this));
    });


    $("#autocomplete").css({
        background:'none'
    });
    

    $("#ren").click(
        function (){
            if(flag){

                $(".sousuo").animate({
                    width:'230px'
                },500);
                $("#ren").hover(function(){
                    $("#ren").css({transform:'rotate(00deg)'})
                },function(){
                    $("#ren").css({transform:'rotate(0deg)'})
                });
                $("#autocomplete").css({
                    background:'#fff'
                });
                flag=false;
            }
            else{
                $("#autocomplete").css({
                    background:'none'
                });
                $(".sousuo").animate({
                    width:'50px'
                },500);
                $("#ren").hover(function(){
                    $("#ren").css({transform:'rotate(360deg)'})
                },function(){
                    $("#ren").css({transform:'rotate(0deg)'})
                });
                flag=true;
            }
    });

    if($("#evaluation #scroll")[0]){

        var t1 = get_id("scroll_1") ,t2 = get_id("scroll_2");
        t2.innerHTML=t1.innerHTML;

        $(".latest-ev-list ul").hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(scroll_me,50);
        });

        timer=setInterval(scroll_me,50);
    }


    if($("#evaluation .ev")[0]){
        var id = $("#evaluation .ev").attr('ev-type');
        open_ev_form(id-1);
    }

    if($("#index")[0]){
        $('#carousel-index,#carousel-college,#carousel-showcase').swipe( {
            swipeLeft: function() {
                $(this).carousel('next');
            },
            swipeRight: function() {
                $(this).carousel('prev');
            },
            allowPageScroll: 'vertical'
        });
    }


    $(".cbox").colorbox({ rel:'cbox',maxHeight:"90%" });
    $(".cbox2").colorbox({ rel:'cbox2',maxHeight:"90%" });

    /*$("#college .cat_list li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $("#college #contents > div").eq(index).fadeIn().siblings().hide();
    });*/

    $("#major #index .tab ul.tab-ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $("#major #index .tab-content").eq(index).fadeIn().siblings().hide();
    });

    $(".list-expand").click(function(){
        $(this).hide();
        $(this).parent().find('ul').animate({
            height:'100%'
        });
        $(this).parent().find('.list-layer').hide();
    });

    $(".list-layer").click(function(){
        $(this).parent().parent().find('.list-expand').hide();
        $(this).hide();
        $(this).parent().animate({
            height:'100%'
        });
    });

    $(".major-list-area").click(function(){
        $("#major .tab-ul li").eq($(this).index()).click();
    });


    $(".leyu_open").click(function(){
        //$("#looyu_dom_1").click();
        doyoo.util.openChat();
        doyoo.util.accept();
        return false;
        //$("#doyoo_mon_accept").click();
    });


    $(window).keydown(function(event){
        switch (event.which) {
            case(27): close_feed_form();
                break;
        }
    });

    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        if( pos > 300 && is_animated!==true){
            top.css({top:10}).fadeIn();
        }
    });

    function active_current_menu(){
        if(window.Think.CONTROLLER_NAME=='index'){
            $(".menu li[rel='/']").addClass('active');
        }else{
            $(".menu li[rel='/"+window.Think.CONTROLLER_NAME+"']").addClass('active');
            $(".menu ul ul li[rel='/"+window.Think.CONTROLLER_NAME+"']").parent().parent().addClass('active');
        }
    }

    function open_feed_form(){

        $.ajax({ url: "/Index/add/model/13",  complete: function(data){
            $("#feed .form").html(data.responseText);
            $("#feed").fadeIn();
        }});

    }

    function open_ev_form(id){

        $.ajax({ url: "/Index/add/model/14/ev_type/"+id,  complete: function(data){
            $("#evaluation .ev #contents .form").html(data.responseText);
        }});
    }

    function close_feed_form(){
        $("#feed").fadeOut();
    }



    function go_top(e){
        is_animated = true;
        $('html,body').animate({
            scrollTop:0
        },1000);

        $(e).animate({
            top:-1000
        },1000,function(){
            e.fadeOut();
            is_animated = false;
        });

    }
    function get_id(id){
        return document.getElementById(id);
    }

    function scroll_me(){
        var t = get_id("scroll"), t1 = get_id("scroll_1") ,t2 = get_id("scroll_2");
        if(t2.offsetTop-40<=t.scrollTop){
            t.scrollTop-=t1.offsetHeight;
        }else{
            t.scrollTop++;
        }
    }

});