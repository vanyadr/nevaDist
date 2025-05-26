export const toggleImg = function () {
    const imgs = document.querySelectorAll('.card__pic.small img');
    
    imgs.forEach(
        function(img) {
            img.addEventListener('click', function(){
                const bigImg = document.querySelector('.card__pic.big');
                const clickedUrl =  img.src;
                img.classList.add('current');
                const currentImg = Array.from(imgs).find(cImg => cImg.src.includes(bigImg.src));
                if (currentImg) {
                    currentImg.classList.remove('current');
                };
                bigImg.src = clickedUrl;
            });
        }
    );
};