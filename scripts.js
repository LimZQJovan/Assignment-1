let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
}); 

var swiper = new Swiper(".customer-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "0": {
      slidesPerView: 1,
      autoplay:{
          delay:700,
          disableOnInteraction:false,
      },
    },
    "768": {
      slidesPerView: 2,
        
    },
    "1020": {
      slidesPerView: 3,
        
    },
  },
});

function submitBooking() {
  const inputs = document.querySelectorAll(".book .row .form-c input");
  for (let i = 0; i < inputs.length-1; i++) {
    inputs[i].value = "";
  }
  alert("reservation made successfully")
}