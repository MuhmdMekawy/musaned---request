$(document).ready(function(){
    new WOW().init();
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        var hei = $('.statics').offset().top
        if (src >= hei - 100){
            $('.statics .content .bottom .one h3').prop('counter' , 0).animate({
                counter : 500
            } , {
                duration : 4000 ,
                easing : "linear" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.statics .content .bottom .two h3').prop('counter' , 0).animate({
                counter : 300
            } , {
                duration : 4000 ,
                easing : "linear" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.statics .content .bottom .three h3').prop('counter' , 0).animate({
                counter : 10
            } , {
                duration : 4000 ,
                easing : "linear" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.statics .content .bottom .four h3').prop('counter' , 0).animate({
                counter : 100
            } , {
                duration : 4000 ,
                easing : "linear" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
        }
    });
    $('.city .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        rtl : true ,
        loop:true,
        margin:17,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            560:{
                items:2
            },
            1000 : {
                items : 4
            },
            1400:{
                items:5
            }
        }
    });
    $('.serv .item').hover(function(){
        $(this).find('p').show(500)
    } , function(){
        $(this).find('p').hide(500)
    });
    $('.req .accord').first().find('.bottom').show()
    $('.req .accord .cont').click(function(){
        $(this).find('.bottom').slideToggle()
    });
    $('.req .enou').click(function(e){
        e.preventDefault();
        $('.req .enough-accord').show(500)
        $(this).hide()
    })
    $('.req .less').click(function(v){
        v.preventDefault();
        $('.req .enough-accord').hide(500)
        $('.req .enou').show()
    })
    // $('.say .o img').hover(function(){
    //     $('.say .one').show(500)
    // } , function(){
    //     $('.say .one').hide(500)
    // });
    // $('.say .one .bottom .on img').hover(function(){
    //     $(this).css({
    //         "width" : "64px" ,
    //         "height" : "64px" 
    //     }).parent().siblings().find('img').css({
    //         "width" : "44px" ,
    //         "height" : "44px"
    //     })
    //     $('.say .one .bottom .on h4').show().parent().siblings().find('h4').hide();
    //     $('.say .one .o').show().siblings().hide()
    // })
    // $('.say .one .bottom .two img').hover(function(){
    //     $(this).css({
    //         "width" : "64px" ,
    //         "height" : "64px" 
    //     }).parent().siblings().find('img').css({
    //         "width" : "44px" ,
    //         "height" : "44px"
    //     })
    //     $('.say .one .bottom .two h4').show().parent().siblings().find('h4').hide();
    //     $('.say .one .tw').show().siblings().hide()
    // })
    // $('.say .one .bottom .on img').hover(function(){
    //     $(this).css({
    //         "width" : "64px" ,
    //         "height" : "64px" 
    //     }).parent().siblings().find('img').css({
    //         "width" : "44px" ,
    //         "height" : "44px"
    //     })
    //     $('.say .one .bottom .on h4').show().parent().siblings().find('h4').hide();
    //     $('.say .one .o').show().siblings().hide()
    // })
    // $('.say .one .bottom .thrr img').hover(function(){
    //     $(this).css({
    //         "width" : "64px" ,
    //         "height" : "64px" 
    //     }).parent().siblings().find('img').css({
    //         "width" : "44px" ,
    //         "height" : "44px"
    //     })
    //     $('.say .one .bottom .thrr h4').show().parent().siblings().find('h4').hide();
    //     $('.say .one .thr').show().siblings().hide()
    // });
    $('.say .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        rtl : true ,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
})