export const orderType = function () {
    const personTypeBtns = document.querySelectorAll('.order__person-type-btn');
    const deliveryTypeBtns = document.querySelectorAll('input[name="delivery"]');

    const personDataForms = document.querySelectorAll('.order__person-data-form');
    const deliveryForms = document.querySelectorAll('.order__delivery-form');
    const payForms = document.querySelectorAll('.order__option-holder');

    personTypeBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const clickedBtn = this;

            personTypeBtns.forEach((btn) => {btn.classList.toggle('active')});
            personDataForms.forEach((form) => {form.classList.toggle('hide')});
            payForms.forEach((form) => {form.classList.toggle('hide')});
            
            if (clickedBtn.classList.contains('order__ur')) {
                const match = document.querySelector('input[name="order__address-match"]');
                const factAddress = document.querySelector('input[name="fact-address"]');

                match.addEventListener('click', function () {
                    if (!match.checked) {
                        factAddress.disabled = false;
                    } else {
                        factAddress.disabled = true;
                    }
                });
            };
        });
    });
    
    let currentBtn;
    deliveryTypeBtns.forEach(item => {if (item.hasAttribute('checked')) currentBtn = item});
    deliveryTypeBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            if (currentBtn != btn) {
                deliveryForms.forEach(form => {
                    if (form.classList&&!form.classList.contains('hide')) form.classList.add('hide');
                })
                document.querySelector(`.order__delivery-form[data-delivery="${btn.dataset.delivery}"]`).classList.remove('hide');
                currentBtn = btn;
            }
        });
    });
};