function calcPositions () {
    const btnsBar = document.querySelector('.about__btns');
    const btns = document.querySelectorAll('.about__btn');
    const underlineWidth = document.querySelector('.about__underline').clientWidth;
    let btnsWidth = [];
    let positions = [];

    if (btns) {
        btns.forEach((btn) => {
            btnsWidth.push(btn.clientWidth);
        });
        let sumBtnsWidth = 0;
        btnsWidth.forEach((num) => {sumBtnsWidth += num});
        const gap = (btnsBar.clientWidth - sumBtnsWidth) / (btns.length - 1);
        
        positions.push((btnsWidth[0] / 2) - (underlineWidth / 2));
        for (let i = 1; i <= (btns.length - 1); i++) {
            let pos = positions[i - 1] + (btnsWidth[i - 1] / 2) + gap + (btnsWidth[i] / 2);
            positions.push(pos);
        };
    };

    return positions;
};

export const tabMenu = function () {
    const btns = document.querySelectorAll('.about__btn');
    const infos = document.querySelectorAll('.about__block');
    const underline = document.querySelector('.about__underline');
    const underlinePositions = calcPositions();
    let counter = 1;
    let currentTabIndex = 1

    if (btns) {
        underline.style.left = `${underlinePositions[0]}px`;

        infos.forEach(
            function (info) {
                info.dataset.tabIndex = counter;
                counter++;
            }
        );
        counter = 1;

        btns.forEach(
            function (btn) {
                btn.dataset.tabIndex = counter;
                counter++;
                btn.addEventListener('click', 
                    function () {
                        if (!btn.classList.contains('active')) {
                            this.classList.add('active');
                            const newTabIndex = this.dataset.tabIndex;
                            document.querySelector(`.about__block[data-tab-index="${newTabIndex}"]`).classList.add('active');
                            document.querySelector(`.about__btn[data-tab-index="${currentTabIndex}"]`).classList.remove('active');
                            document.querySelector(`.about__block[data-tab-index="${currentTabIndex}"]`).classList.remove('active');
                            currentTabIndex = newTabIndex;
                            underline.style.left = `${underlinePositions[currentTabIndex - 1]}px`;
                        }
                    }
                );
            }
        );
    };
};