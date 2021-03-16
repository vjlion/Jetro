$(function () {
    $('.slider').slick({
        arrow: true,
        asNavFor: '.thumbs',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images//slider/previous.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/next.png" alt=""></button>',
    });
   
    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        arrow: false,
        focusOnSelect: true,
       
    });

    $('.header__menu-btn').on('click' ,function(){
        $('.header__menu>ul').slideToggle();
    });
    



});

