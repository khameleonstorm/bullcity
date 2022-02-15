var swiper = new Swiper(".mySwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
loop: true,
autoplay:true,
coverflowEffect: {
rotate: 0,
stretch: 10,
depth: 200,
modifier: 2,
slideShadows: true,
},
});






const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}