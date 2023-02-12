let fade = document.querySelector('.fade')
let popup = document.querySelector('.modal');
let popupBtn = document.querySelector('.button-block');

if(popupBtn) {
    popupBtn.addEventListener('click', e => {
        popupBtn.classList.toggle('active');
        fade.classList.toggle('active');
        popup.classList.toggle('active');
    })

    fade.addEventListener('click', e => {
        popupBtn.classList.remove('active');
        fade.classList.remove('active');
        popup.classList.remove('active');
    })

    popup.addEventListener('click', e => {
        popupBtn.classList.remove('active');
        fade.classList.remove('active');
        popup.classList.remove('active');
    })

}