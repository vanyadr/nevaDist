import {openDropDown} from './modules/openDropDown.js'
import {toggleAccordion} from './modules/toggleAccordion.js'
import {menuOpen} from './modules/openBurger.js'
import {toggleImg} from './modules/toggleCardImg.js'
import {tabMenu} from './modules/toggleCardMenu.js'

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.card__slider')) {
        $('.card__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'ease',
            arrows: false,
            customPaging: function() {
                return '<button class="card__bullet"></button>';
            },
            appendDots: $('.card__bullets')
        });
    }
    openDropDown();
    toggleAccordion();
    menuOpen();
    toggleImg();
    tabMenu();
});