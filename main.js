//Swiper
var swiper = new Swiper(".home", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            spaceBetween: 30
        }
    }
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// Grab all navigation links inside the navbar
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 1. Find the link that currently has the active class and remove it
        const currentActive = document.querySelector('.navbar a.home-active');
        if (currentActive) {
            currentActive.classList.remove('home-active');
        }
        
        // 2. Add the active class to the specific link you just clicked
        this.classList.add('home-active');
    });
});
