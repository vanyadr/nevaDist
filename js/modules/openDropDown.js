export const openDropDown = function () {
    const items = document.querySelectorAll('.header__ddm-item');
    const menu = document.querySelector('.header__drop-down-menu');
    const overlay = document.querySelector('.overlay');
    const btns = document.querySelectorAll('.menu__item');
    let counter = 1;
    
    if (items) {
        items.forEach (
            (item) => {
                item.dataset.menu = counter;
                counter++;
            }
        );
        counter=1;
        
        let menuHolderOpened = false;

        btns.forEach (
            (btn) => {
                if (!btn.classList.contains('menu__item--no-arrow')) {
                    btn.dataset.menu = counter;
                    counter++;

                    btn.addEventListener('mouseover',
                        function () {
                            const correctItem = document.querySelector(`.header__ddm-item[data-menu="${this.dataset.menu}"]`);
                            if (menuHolderOpened) {
                                items.forEach(
                                    (item) => {
                                        if (item.classList.contains('header__drop-down-menu--open')) {
                                            item.classList.toggle('header__drop-down-menu--open');
                                            document.querySelector(`.menu__item[data-menu="${item.dataset.menu}"]`).classList.toggle('header__drop-down-menu--open');
                                        }
                                    }
                                );
                                correctItem.classList.toggle('header__drop-down-menu--open');
                                this.classList.toggle('header__drop-down-menu--open');
                            } else {
                                menu.classList.toggle('header__drop-down-menu--open');
                                correctItem.classList.toggle('header__drop-down-menu--open');
                                this.classList.toggle('header__drop-down-menu--open');
                                overlay.classList.toggle('active');
                                menuHolderOpened = true;
                            };
                        }
                    );
                }
            }
        );

        overlay.addEventListener('mouseover', () => {
            items.forEach(
                (item) => {
                    if (item.classList.contains('header__drop-down-menu--open')) {
                        item.classList.toggle('header__drop-down-menu--open');
                        document.querySelector(`.menu__item[data-menu="${item.dataset.menu}"]`).classList.toggle('header__drop-down-menu--open');
                    }
                }
            );
            menu.classList.toggle('header__drop-down-menu--open');
            overlay.classList.toggle('active');
            menuHolderOpened = false;
        });
    }
};