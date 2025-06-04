import {openDropDown} from './modules/openDropDown.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {menuOpen} from './modules/openBurger.js';
import {editProfile} from './modules/editProfile.js';

document.addEventListener('DOMContentLoaded', () => {
    openDropDown();
    toggleAccordion();
    menuOpen();
    editProfile();
});