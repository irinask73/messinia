$(function () {

    $('.slider__wrapper').slick({
        prevArrow: '<button type="button" class="prev icon-lnr-chevron-right"></button>',
        nextArrow: '<button type="button" class="next icon-lnr-chevron-left"></button>'
      
    });

$('.clients__inner').slick({
    prevArrow: '<button type="button" class="prev icon-lnr-chevron-right"></button>',
    nextArrow: '<button type="button" class="next icon-lnr-chevron-left"></button>'
});


$('.menu__btn').on('click', function () {
    $('.header__menu').slideToggle();
});

var mixer = mixitup('.explore__inner-box');
});