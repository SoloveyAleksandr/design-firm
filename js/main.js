$(function () {

    $('.projects-slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

})

const headerBtn = document.getElementById('navListBtn');
const popup = document.getElementById('popup');
const popupBg = document.getElementById('popup-bg');
const form = document.getElementById('popup-form');
const mainBtn = document.getElementById('main-screen__btn');

headerBtn.addEventListener('click', activePopup);
mainBtn.addEventListener('click', activePopup);

popupBg.addEventListener('click', deactivePopup);

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
}

function activePopup() {
    popup.classList.add('_active');
}

function deactivePopup() {
    popup.classList.remove('_active');
}


const menuBtn = document.getElementById('nav-btn');
const menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    menuBtn.classList.toggle('_active');
    menuList.classList.toggle('_active');
}