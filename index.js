let menu = document.querySelector("#menubar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// Review Swiper
var swiper = new Swiper(".ReviewSlide", {
  slidesPerView: 1,
  grabCoror: true,
  loop: true,
  spaceBetween: 10,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnImteraction: false,
  },
});
