export const filtersMobileOpen = function () {
    const btn = document.querySelector('.catalog__filters-btn');
    const menu = document.querySelector('.catalog__filters-block');

    console.log(1);
    btn.addEventListener('click', () => {
        console.log(2);
        menu.classList.toggle('opened');
    });
};