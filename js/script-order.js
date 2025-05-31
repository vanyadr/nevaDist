import {openDropDown} from './modules/openDropDown.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {menuOpen} from './modules/openBurger.js';
import {orderType} from './modules/toggleOrder.js';

document.addEventListener('DOMContentLoaded', () => {
    openDropDown();
    toggleAccordion();
    menuOpen();
    orderType();
});