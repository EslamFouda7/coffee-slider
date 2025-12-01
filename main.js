const circle = document.querySelector('.circle');
function changeImg() {
    const leftImg = document.querySelector('.img-left');
    const centerImg = document.querySelector('.img-center');
    const rightImg = document.querySelector('.img-right');
    
   
        leftImg.className = 'img-center';
        centerImg.className = 'img-right';
        rightImg.className = 'img-left';
    }
   

 function rotate() {
        circle.classList.remove('rotate-left', 'rotate-right');
        if (Math.random() > 0.5) {
            circle.classList.add('rotate-right');

        }
        else {
            circle.classList.add('rotate-left');
        }
    }

setInterval(changeImg, 3000);
setInterval(rotate, 3000);

