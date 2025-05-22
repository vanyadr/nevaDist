export const menuOpen = function () {
    const btn = document.querySelector('.header__burger-btn--mobile');
    const menu = document.querySelector('.header__mobile-menu');
    const closer = document.querySelector('.mobile-menu__closer');
    const body = document.querySelector('body');
    const items = document.querySelectorAll('.accrodion-item');


    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        closer.classList.toggle('active');
        body.classList.toggle('menu-opened');
    });
    
    closer.addEventListener('click',
        () => {
            if (closer.classList.contains('active')) {
                menu.classList.toggle('active');
                closer.classList.toggle('active');
                body.classList.toggle('menu-opened');

                items.forEach(
                    (item) => {
                        if (item.querySelector('.accordion-content').classList.contains('opened')) {
                            item.querySelector('.accordion-content').classList.remove('opened');
                            item.querySelector('.accordion-bullet').classList.remove('opened');
                        };
                    }
                );
            }
        }
    );
};