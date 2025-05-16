export const menuOpen = function () {
    const btn = document.querySelector('.header__img-wrapper');
    const menu = document.querySelector('.header__menu');
    const header = document.querySelector('.header__holder');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        header.classList.toggle('active');
    });
};