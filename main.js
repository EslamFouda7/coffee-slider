const circle = document.querySelector('.circle');
function changeImg() {
    const leftImg = document.querySelector('.img-left');
    const centerImg = document.querySelector('.img-center');
    const rightImg = document.querySelector('.img-right');


    leftImg.className = 'img-center';
    centerImg.className = 'img-right';
    rightImg.className = 'img-left';
}

let index = 0;
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

///////////////////////////////////////////////////////////////////////////

drinks = [
    {
        drink: '/imgs/s1.png',
        fruts: '/imgs/ss1.png',
        bg: '#D62E2E'
    },
    {
        drink: '/imgs/s2.png',
        fruts: '/imgs/ss2.png',
        bg: '#7A1736'
    },
    {
        drink: '/imgs/s3.png',
        fruts: '/imgs/ss3.png',
        bg: '#84AF3C'
    },
    {
        drink: '/imgs/s4.png',
        fruts: '/imgs/ss4.png',
        bg: '#F9AC14'
    }
]

let rotateAngle = 0;
const circle2 = document.querySelector('.section3 .circle');
const section3 = document.querySelector('.section3');
const frutsDiv = document.querySelector('.fruts');
section3.style.backgroundColor = `${drinks[0].bg}`


drinks.forEach((item, idx) => {
    console.log(item, idx);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = item.drink;
    div.appendChild(img);

    circle2.appendChild(div);













    const div2 = document.createElement('div');
    const imgFruts = document.createElement('img');

    imgFruts.classList.add('fruts-img');

    div2.appendChild(imgFruts);
    frutsDiv.appendChild(div2)
    imgFruts.src = drinks[idx].fruts;
    imgFruts.style.position = 'absolute';
    imgFruts.style.top = '50%';
    imgFruts.style.left = '50%';
    imgFruts.style.transform = 'translate(-50%, -50%)';
    div2.style.width = 'clamp(12.5rem, 5.8979rem + 28.1690vw, 31.25rem)'
})


const nextBtn = document.getElementById('next').addEventListener('click', () => {
    rotateAngle += 90;
    index++;
    if (index > drinks.length - 1) {
        index = 0;
    }

    updateAnle();
});
const prevBtn = document.getElementById('prev').addEventListener('click', () => {
    rotateAngle -= 90;
    index--;
    if (index < 0) {
        index = drinks.length - 1;
    }

    updateAnle();
});

function updateAnle() {
    console.log(rotateAngle);
    console.log(index);
    circle2.style.transform = `translate(50%, 15%) rotate(${rotateAngle}deg)`;
    section3.style.backgroundColor = `${drinks[index].bg}`


    const allFruts = document.querySelectorAll('.fruts-img');
    allFruts.forEach((img, idx) => {
        img.classList.remove('active');
        if (idx === index) {
            img.classList.add('active');
        }
    })
}