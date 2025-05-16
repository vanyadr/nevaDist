export const changePrase = function (texts) {
    const container = document.querySelector('.video__line');

    if (container) {
      let currentIndex = 0;
    
      function changeText() {
        currentIndex = (currentIndex + 1) % texts.length;
        container.textContent = texts[currentIndex];
      }
    
      changeText();
      setInterval(changeText, 2000);
    }
};