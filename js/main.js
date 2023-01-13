$(function name(params) {

    $('.slider__items').slick({
        dots: false,
        arrows: true,

        responsive: [


            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]  ,
        prevArrow: '<button type="button"class="slick-prev"><img class="prev" src="images/left.svg" alt=""></button>',
        nextArrow: '<button type="button"class="slick-next"><img class="next" src="images/right.svg" alt=""></button>'
    });

    $('.menu__btn').on('click', function () {
        $('.menu__items').toggleClass('menu__items--active');
    });
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('active');
    });
});