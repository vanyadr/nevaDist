import {openDropDown} from './modules/openDropDown.js'
import {toggleAccordion} from './modules/toggleAccordion.js'
import {menuOpen} from './modules/openBurger.js'
import {toggleImg} from './modules/toggleCardImg.js'

document.addEventListener('DOMContentLoaded', () => {
    openDropDown();
    toggleAccordion();
    menuOpen();
    toggleImg();
});