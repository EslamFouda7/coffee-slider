const circle = document.querySelector('.circle');
function changeImg() {
    const leftImg = document.querySelector('.img-left');
    const centerImg = document.querySelector('.img-center');
    const rightImg = document.querySelector('.img-right');


    leftImg.className = 'img-center';
    centerImg.className = 'img-right';
    rightImg.className = 'img-left';
}

let count = 0;
function rotate() {

    circle.classList.remove('rotate-left', 'rotate-right');
    void circle.offsetWidth; // Trigger reflow to restart animation
    if (count === 0) {
        circle.classList.add('rotate-right');
        count = 1;

    }
    else {
        circle.classList.add('rotate-left');
        count = 0;
    }
}

setInterval(changeImg, 3000);
setInterval(rotate, 3000);

