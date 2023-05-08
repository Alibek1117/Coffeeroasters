let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};


let img1 = document.querySelector('#img1');
let cards1 = document.querySelector('.cards1');

img1.onclick = () => {
    img1.classList.toggle('bx');
    cards1.classList.toggle('opencard');
}
