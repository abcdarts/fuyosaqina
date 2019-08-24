$(function(){
    // スムーススクロール
    $('.js-pagetop').on('click', function(e){
        e.preventDefault();
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('.js-accordion').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('is-active')) {
            $(this).next().slideUp();
            $(this).removeClass('is-active');
        } else {
            $(this).next().slideDown();
            $(this).addClass('is-active');
        }
    });

    $('.js-tooltip li a').on('click', function(e){
        e.preventDefault();

        $target = $(this).parent();

        $(".tooltip").css({
            'visibility': 'hidden'
        });

        if($target.hasClass('header__leftListItem--isActive')) {
            $('.js-tooltip li').removeClass('header__leftListItem--isActive');
            return false
        } else {
            $('.js-tooltip li').removeClass('header__leftListItem--isActive');
            $target.addClass('header__leftListItem--isActive');
            $(".tooltip--category0" + $target.data("category")).css({
                'visibility': 'visible'
            });
            $('.overlay').css({
                'display': 'block',
                'height': $('body').height()
            })
        }
    });

    $('.overlay').on('click', function(e){

        if($(window).width() > 769) {
            $(".tooltip").css({
                'visibility': 'hidden'
            });
            $('.js-tooltip li').removeClass('header__leftListItem--isActive');

            $('.overlay').css({
                'display': 'none',
                'height': $('body').height()
            })
        }
    });

    $('.js-navBtn').on('click', function(){
        if($(this).hasClass('is-active')) {
            $('.js-navBtn').removeClass('is-active');
            $('.spNavigation__list').hide();
            $('.overlay').css({
                'display': 'none',
                'background': 'transparent',
                'height': 0
            })
        } else {
            $('.js-navBtn').addClass('is-active');
            $('.spNavigation__list').show();
            $('.overlay').css({
                'display': 'block',
                'background': '#73d4e6',
                'height': $('body').height()
            })
        }
    });

    $('.js-accordion li').on('click', function(){
        if($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).find('.spNavigation__listAccordionList').slideUp();
        } else {
            $('.js-accordion li').removeClass('is-active');
            $(this).addClass('is-active');
            $('.js-accordion li').find('.spNavigation__listAccordionList').slideUp();
            $(this).find('.spNavigation__listAccordionList').slideDown();
        }
    });

    var ua = navigator.userAgent;

    if(ua.indexOf('iPhone') === -1 || ua.indexOf('Android') === -1){
        $('a[href^="tel"]').on('click', function(e){
            e.preventDefault();
            console.log('a')
        });
    }
});

