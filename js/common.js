$(function(){
    //スムーススクロール
    // $('a[href^="#"]').click(function(){
    //     var speed = 500;
    //     var href= $(this).attr("href");
    //     var target = $(href == "#" || href == "" ? 'html' : href);
    //     var position = target.offset().top;
    //     $("html, body").animate({scrollTop:position}, speed, "swing");
    //     return false;
    // });
    // //ハンバーガーメニュー
    // $('.headerNav__toggle').on('click', function () {
    //     $(this).toggleClass('open');
    //     $('.headerNav__menu').toggleClass('open');
    // });
    // //スクロール
    // window.sr = ScrollReveal();
    // sr.reveal('.animate', { origin: 'left', easing: 'ease', duration: 900, distance: '150px', opacity: 1, scale: 1 });

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
        // console.log(e.target.classList)
        // if(e.classList.contains('tooltip') == true){
        //     console.log('a')
        // }

        $(".tooltip").css({
            'visibility': 'hidden'
        });
        $('.js-tooltip li').removeClass('header__leftListItem--isActive');

        $('.overlay').css({
            'display': 'none',
            'height': $('body').height()
        })
    });

    $('.js-navBtn').on('click', function(){
        if($(this).hasClass('is-active')) {
            $('.js-navBtn').text("＋");
            $('.js-navBtn').removeClass('is-active');
            $('.spNavigation__list').hide();
        } else {
            $('.js-navBtn').text("×");
            $('.js-navBtn').addClass('is-active');
            $('.spNavigation__list').show();
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
    })

});

