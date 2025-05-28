export const toggleSidePopup = function () {
    const overlay = document.querySelector('.overlay-popup');
    const popup = document.querySelector('.side-popup');
    const closer = document.querySelector('.side-popup__closer');
    const btn = document.querySelector('.cart__summ-btn');

    btn.addEventListener('click',
        function () {
            overlay.classList.add('active');
            popup.classList.add('active');
        }
    );
    overlay.addEventListener('click',
        function () {
            popup.classList.remove('active');
            overlay.classList.remove('active');
        }
    );
    closer.addEventListener('click',
        function () {
            popup.classList.remove('active');
            overlay.classList.remove('active');
        }
    );
};