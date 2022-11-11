$(document).ready(function() {

    /*top menu toggle*/
    $('.menu-btn').click(function(){
        $('.header-nav').toggleClass('vis');
        $('body').toggleClass('oh');
        $(this).toggleClass('close');
    });

    /*end top menu toggle*/

    /*scroll to top*/
    var scrollTop = $(".scroll-top");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 700) {
            $(scrollTop).addClass('vis');
        } else {
            $(scrollTop).removeClass('vis');
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*end scroll to top*/



    // function scrollEvent() {
    //     var hT = $('.vote').offset().top,
    //       hH = $('.vote').outerHeight(),
    //       wH = $(window).height(),
    //       wS = $(this).scrollTop();
    //     if (wS > (hT+hH-wH)){
    //         $('.vote__like div').each(function () {
    //             $(this).prop('Counter',0).animate({
    //                 Counter: $(this).text()
    //             }, {
    //                 duration: 2000,
    //                 easing: 'swing',
    //                 step: function (now) {
    //                     $(this).text(Math.ceil(now));
    //                 }
    //             });
    //         });
    //       window.removeEventListener("scroll", scrollEvent);
    //     }
    // }
    // window.addEventListener("scroll", scrollEvent);

    $('#slick_1').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        asNavFor: '#slick_2'
    });
    $('#slick_2').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        asNavFor: '#slick_1'
    });



});








