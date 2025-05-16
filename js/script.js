document.addEventListener('DOMContentLoaded', () => {
    $('.hero__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        customPaging: function() {
            return '<button class="hero__bullet"></button>';
        },
        appendDots: $('.hero__bullets')
    });
});