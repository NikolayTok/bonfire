$(function () {

    $('.menu__btn').on('click', function () {
        $('.header__top').toggleClass('header__top--active');
    });

    $('.menu__item a').on('click', function () {
        $('.header__top').removeClass('header__top--active');
    });

    $('.menu__link').on('click', function () {
        $('.menu__link').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
    });

    $(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

});