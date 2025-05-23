import {openDropDown} from './modules/openDropDown.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {menuOpen} from './modules/openBurger.js';

document.addEventListener('DOMContentLoaded', () => {
    $('.hero__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        customPaging: function() {
            return '<button class="hero__bullet"></button>';
        },
        appendDots: $('.hero__bullets')
    });
    openDropDown();
    toggleAccordion();
    menuOpen();
});