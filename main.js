
/* INIT */

const nandibus = document.querySelector('.nandibus');
const keys = Array.from(document.querySelectorAll('.key'));


/* RESIZE NANDIBUS */

const nandibusWitdh = nandibus.clientWidth;

const resizeNandibus = () => {
    const basesize = visualViewport.width < 1200 ? visualViewport.width - 100 : 1200;
    const scale = basesize / nandibusWitdh - 0.001;
    nandibus.style.transform = `scale(${scale})`;
}

resizeNandibus();
window.addEventListener('resize', resizeNandibus);


/* ADD SOUND TO KEY PRESS */

const keyPressSound = document.getElementById('key-press-sound');
const playSound = () => keyPressSound.paused ? keyPressSound.play() : keyPressSound.currentTime = 0;

keys.forEach(key => key.addEventListener('click', playSound ));


/* CLICK NANDIBUS KEY ON KEYPRESS */

window.addEventListener('keydown', e => {
    const key = keys.filter(key => key.dataset.keycode === e.code)[0];

    if (!key) { return; }

    key.classList.add('hover');
    key.classList.add('active');
    key.click();

    setTimeout(() => {
        key.classList.remove('active');
    }, 100);
});