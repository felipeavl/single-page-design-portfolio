const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 30,    
    centeredSlides: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }    
  }); 

const next = document.querySelector(".carroussel-nav-button-next");
const previous = document.querySelector(".carroussel-nav-button-previous");

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        next.click();
    }
    if (event.key === "ArrowLeft") {
        previous.click();
    }
} );

next.addEventListener("click", function () {
    swiper.slideNext();
});
previous.addEventListener("click", function () {
    swiper.slidePrev();
} );

