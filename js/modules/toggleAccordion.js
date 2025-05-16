// First version whis two cycles

// export const toggleAccordion = function () {
//     const items = document.querySelectorAll('.accrodion-item');
//     const btns = document.querySelectorAll('.accordion-header');
//     let counter = 1;
    
//     items.forEach(
//         function (item) {
//             item.dataset.accordion = counter;
//             item.querySelector('.accordion-header').dataset.accordion = counter;
//             counter++;
//         }
//     );

//     btns.forEach((btn) => {
//         btn.addEventListener('click', 
//             function () {
//                 const item = document.querySelector(`.accrodion-item[data-accordion="${this.dataset.accordion}"]`);
//                 item.querySelector('.accordion-content').classList.toggle('opened');
//                 item.querySelector('.accordion-bullet').classList.toggle('opened');
//             }
//         );
//     });
// };

export const toggleAccordion = function () {
    const items = document.querySelectorAll('.accrodion-item');
    let counter = 1;
    
    if (items) {
        items.forEach(
            function (item) {
                const btn = item.querySelector('.accordion-header');
    
                item.dataset.accordion = counter;
                btn.dataset.accordion = counter;
                btn.addEventListener('click', 
                    function () {
                        const correctItem = document.querySelector(`.accrodion-item[data-accordion="${this.dataset.accordion}"]`);
                        
                        correctItem.querySelector('.accordion-content').classList.toggle('opened');
                        correctItem.querySelector('.accordion-bullet').classList.toggle('opened');
                    }
                );
                counter++;
            }
        );
    }
};