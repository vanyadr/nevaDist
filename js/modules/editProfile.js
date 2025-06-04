export const editProfile = function() {
    const btns = document.querySelectorAll('.profile__btn');
    const form = document.querySelector('.profile__person-data-form');
    const inps = form.querySelectorAll('input');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.remove('active');
            if (this.classList.contains('profile__btn--edit')) {
                document.querySelector('.profile__btn--save').classList.add('active');

                inps.forEach(inp => {
                    inp.disabled = false;
                    if (inp.classList.contains('hide')) inp.classList.remove('hide');
                });
            } else {
                document.querySelector('.profile__btn--edit').classList.add('active');

                inps.forEach(inp => {
                    inp.disabled = true;
                    if (inp.id == 'profile__pass-return') inp.classList.add('hide');
                });
            };
        })
    });
};