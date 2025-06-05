import {openDropDown} from './modules/openDropDown.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {menuOpen} from './modules/openBurger.js';

document.addEventListener('DOMContentLoaded', () => {
    openDropDown();
    toggleAccordion();
    menuOpen();
});